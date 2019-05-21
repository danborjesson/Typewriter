  let i = 0;
  let lastTime = 0;
  const $output = $("#output");
  const $content = $('#content');

$(window).on("keypress", function(event) {
  // Prevent backspace, enter and escape
  if(event.which === 13 || event.which === 8 || event.which === 27) { console.log('No output'); return; }
  // Keypress counter
  $("span2").text(i += 1 );
  // Intervall for scrollbar
  setInterval(updateScroll,5000);
  // Timer for Key llklkLatency
  let currTime = new Date();
  let ms = lastTime ? currTime - lastTime : 0;
  $output.text(ms + "ms");
  lastTime = currTime;
  // Fontweight
  var fontWidth = ms > 900 ? 100 : 900 / ms * 100;
  // Typewriter
  var key = event.key;
  $content.append('<span style="font-width:' + fontWidth + '">' + key + '</span>');
  //Font-Weight 
  $("span3").text(fontWidth); 
});



function updateScroll(){
    var element = document.getElementById("content");
    element.scrollTop = element.scrollHeight;
}
 
// Timer

  const output = document.querySelector('output'); 

  let timeRead = false;

  let now = 0;
  let interval = null;

function startTimer() {
  
  let elapsedMil = Date.now() - now;
  
  let mil = (elapsedMil).toFixed(0) % 100;
  let sec = Math.floor(elapsedMil/1000) % 60;
  let min = Math.floor(elapsedMil/60000) % 60;
  let hou = Math.floor(elapsedMil/3600000) % 24;
  
  mil = padTime(mil);
  sec = padTime(sec);
  min = padTime(min);
  hou = padTime(hou);
  
  
  function padTime(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }
  
  output.textContent = hou + ":" + min + ":" + sec + ":" + mil;
}

 window.onload = function () {
  now = Date.now();
  interval = window.setInterval(startTimer, 10);
   };

var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});
