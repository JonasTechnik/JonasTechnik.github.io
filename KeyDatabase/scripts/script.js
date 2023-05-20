const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", function (event) {
  // Action to be performed when the overlay is clicked
  console.log("Overlay clicked!");
  // Add your code here
});

const menuItems = document.querySelectorAll(".menu");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click event from propagating to the overlay
    const itemId = this.id;
    var url = "";

    switch (itemId) {
      case "crespo":
        url = "https://crespomods.com/licensekey.php";
        break;
      case "grand":
        url = "/modmenus/grand.html";
        break;
      case "amnesia":
        break;
      case "liquid":
        url = "https://skymods.org/download/liquidkey";
        break;
    }
    window.open(url, "_blank");
  });
});
