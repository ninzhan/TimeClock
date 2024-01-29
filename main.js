
var timerOn = false;
var timerStarted = false;

var timerStart = Date.now();

var duration = 400000;

// Jquery Functions start here
$( function(){

	window.requestAnimationFrame(timerLoop);
	
	$("button#start_timer").on("click", function(e){
		duration = $("input#duration").val()
		if(duration == 0) return;
		console.log(duration)
		timerOn = true;
		if(!timerStarted){
			timerStart = Date.now()
		}
		console.log("starting");
	});

	$("button#stop_timer").on("click", function(e){
		timerOn = false;
		console.log("stopping");
	});
	
});



var timerLoop = function(){
	
	if(timerOn){
		let timeMS = getTimerMS(timerStart, duration);
		$("div.timer").html(getTimeString(timeMS));
	}
	
	window.requestAnimationFrame(timerLoop);
}

var getTimerMS = function(_timerStart, _duration){
	return _duration - (Date.now()-_timerStart);
}

var getTimeString = function(_timerMS) {
	let secs = _timerMS / 1000;
	let mins = secs / 60;
	let hours = mins / 60;
	let days = hours / 24
	
	secs = secs % 60;
	mins = mins % 60;
	hours = hours % 24;
	
	return "Time: " + 
	Math.floor(days).toString() + ":" + 
	(Math.floor(hours)%60).toString() + ":" + 
	(Math.floor(mins)%60).toString() + ":" + 
	(Math.floor(secs)%60).toString();
}

// TODO get cookies working for multiple stored timers