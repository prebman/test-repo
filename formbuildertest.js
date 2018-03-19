// Get the button
var btn = document.getElementById("id123-button-send");

// Save and remove the onclick handler
var clickHandler = btn[0].onclick;
btn[0].onclick = false;

document.getElementById("id123-button-send").onclick = function () {
var gps = document.getElementById("id123-control37592984").value;
alert(gps);
}
