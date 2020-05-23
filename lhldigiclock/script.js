function digitalClock() {
var date = new Date();
var hours = date.getHours();
var mins = date.getMinutes();
var secs = date.getSeconds();
var en = 'AM';
if (hours > 12 ) {
    hours = hours - 12; 
    en = 'PM';
}
if (hours == 0) {
    hours = 12;
}
if (hours < 10) {
    hours = "0" + hours;
}
if (mins < 10) {
    mins = "0" + mins;
}
if (secs < 10) {
    secs = "0" + secs;
}
document.getElementById('clock').innerHTML = hours + " : " + mins + " : " + secs + " " + en; 
}
setInterval(digitalClock,100);
