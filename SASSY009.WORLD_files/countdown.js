var date1 = new Date("Jul 28, 2021 00:00:00").getTime();
var date2 = new Date("Aug 24, 2021 00:00:00").getTime();
var date3 = new Date("Sep 15, 2021 00:00:00").getTime();

const text1 = document.getElementById('countdown-1')
const text2 = document.getElementById('countdown-2')
const text3 = document.getElementById('countdown-3')


// 
// setDate(text1, date1);
// setDate(text2, date3);
// setDate(text3, date3);
//
// var x = setInterval(function() {
//   setDate(text1,date1);
//   setDate(text2,date2);
//   setDate(text3,date3);
// }, 1000);




function setDate(em, targetDate){
  var now = new Date().getTime();
  var distance = targetDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  em.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    em.innerHTML = "EXPIRED";
  }
}
