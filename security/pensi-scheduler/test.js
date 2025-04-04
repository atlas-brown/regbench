const test = require('tape');
const scheduler = require('./');

test('Pensi-scheduler', (t) => {
	t.plan(1);
	// create a two secs period scheduler
	var sm = scheduler({period: 1000});	
	sm.addTask('work-queue/gmail', new Date()); 
	sm.once('interval', function(task){
		sm.stop();	
		t.equal(task.name, 'work-queue/gmail', 'Incorrect task');
	});

	sm.start();
})
