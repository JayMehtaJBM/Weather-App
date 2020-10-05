var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
var today = new Date();
let now = (today.getDate() + "-" + months[today.getMonth()] + "  " + days[today.getDay()] + " ");
document.getElementById("now").innerHTML = now;

var des = parseFloat($('.id').text());
console.log(des);

if ( des > 200 && des < 233) {
    $('body').css('background' , 'url(images/thunder.jpg) ');
    $('body').css('background-size' , 'cover');

} else if ( des > 299 && des < 322 || des > 802 && des < 805 || des > 519 && des < 532) {

    $('body').css('background' , 'url(images/broken-clouds.jpg) ');
    $('body').css('background-size' , 'cover');

} else if ( des > 499 && des < 505 || des === 801 ) {

    $('body').css('background' , 'url(images/rain.jpg) ');
    $('body').css('background-size' , 'cover');

} else if ( des === 501 || des > 599 && des < 623 ) {

    $('body').css('background' , 'url(images/snow.jpg) ');
    $('body').css('background-size' , 'cover');

} else if ( des > 519 && des < 532 ) {

    $('body').css('background' , 'url(images/shower rain.jpg) ');
    $('body').css('background-size' , 'cover');

} else if ( des > 700 && des < 782 ) {

    $('body').css('background' , 'url(images/mist.jpg) ');
    $('body').css('background-size' , 'cover');

} else if ( des === 800 ) {

    $('body').css('background' , 'url(images/clear-sky.jpg) ');
    $('body').css('background-size' , 'cover');

} else if ( des === 802 ) {

    $('body').css('background' , 'url(images/scattered-clouds.jpg) ');
    $('body').css('background-size' , 'cover');
}
