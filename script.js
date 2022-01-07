function klik() {
  let x = document.getElementById("gumb");
  x.style.border = "1px dotted"
  x.style.fontSize = "20px"
  x.style.color = "red";
}

function ka() {
  let x = document.getElementById("kar");
  x.style.border = "2px dashed"
  x.style.fontSize = "40px"
  x.style.color = "blue"
  x.style.fontFamily = "monospace";
}
alert("Welcome to my site")
document.onmousedown=click
var times=0
var times2=10
function click() {
if ((event.button==2) || (event.button==3)) {
if (times>=1) { bye() }
alert("No right clicking!!!!!! don't do it again..");
times++ } }
function bye() {
alert("I said NO right clicking! click ok to exit LMAO!");
bye() }
