let i = 0;
let lastTime = 0;
const $output = $("#output");
const $textarea = $('#textarea');
const $content = $('#content');

$(window).on("keypress", function(event) {
  $("span2").text(i += 1 );
  setInterval(updateScroll,5000);
  if ($textarea.text() === "Start typing") {
    $textarea.text('');
  }
  let currTime = new Date();
  let ms = lastTime ? currTime - lastTime : 0;
  $output.text(ms + "ms");
  lastTime = currTime;
  var fontWeight = ms > 900 ? 100 : 900 / ms * 100;
  var key = event.key;
  $textarea.append('<span style="font-weight:' + fontWeight + '">' + key + '</span>');
  $content.append('<span style="font-weight:' + fontWeight + '">' + key + '</span>');
  $("span3").text(fontWeight);
 
});

function updateScroll(){
    var element = document.getElementById("content");
    element.scrollTop = element.scrollHeight;
}




 // every millisecond call updateDisplay


function updateDisplay(){
      var value = parseInt($('#timer').find('.value').text(), 10);
    
    
    value++;
     $('#timer').find('.value').text(value);
    
}





var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});