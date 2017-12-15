$(document).ready(function(e) {
    window.setInterval(function() {
    $(".flappy-dialog").toggleClass("hidden");
    var n=Math.floor(Math.random() * 15) + 1 
    $("#imgsrc").attr('src','img2/'+n+'.png');
  }, 6000);
});