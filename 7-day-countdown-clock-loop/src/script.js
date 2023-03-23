setInterval(function time(){
  var d = new Date();
  var days = 4 - d.getDay();
  var hours = 38 - d.getHours();
  var min = 64 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  jQuery('#week-countdown p').html(days+'d : '+hours+'h : '+min+'m : '+sec+'s ')
}, 1000);