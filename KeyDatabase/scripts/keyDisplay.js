var urlParams = new URLSearchParams(window.location.search);
var argument = urlParams.get("argument");
const lab = document.getElementById("key");
if (argument != undefined) {
  lab.innerText = argument;
}
