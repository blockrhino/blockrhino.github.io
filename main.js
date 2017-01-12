
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

<<<<<<< HEAD
var ip = new XMLHttpRequest();
ip.open('//api.ipify.org?format=jsonp&callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
ip.send();
var userIp = ip.statusText;

letterColors = [red, orange, green, blue, purple];

  bubbleShape = "circle";

drawName(ip, letterColors);
=======
var myName = "Rian O."
function check() {
    document.getElementById("switch").checked = true;
}
letterColors = [red, orange, green, blue, purple];
if check() = true{
    bubbleShape = "circle";
}
else {
    bubbleShape = "square";
}


drawName(myName, letterColors);
>>>>>>> parent of ff1fbb7... h
bounceBubbles();
