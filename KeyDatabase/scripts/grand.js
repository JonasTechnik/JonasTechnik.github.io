var button = document.getElementById("get");
var selectElement = document.getElementById("version");

// Add a click event listener to the button
button.addEventListener("click", function () {
  var selectedIndex = selectElement.selectedIndex;
  switch (selectedIndex) {
    case 0:
      window.open("https://pastebin.com/raw/9Ur28E2G", "_blank");
      break;

    case 1:
      var url =
        "../keyDisplay.html?argument=" + encodeURIComponent("Rm7^sT9p#@");
      window.location.href = url;
      break;
  }
});
