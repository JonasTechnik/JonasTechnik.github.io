const headerDownloadButton = document.getElementById("downloadRedirect");
const directDownloadButton = document.getElementById("downloadBTN");
const contactButton = document.getElementById("contactRedirect");
const exploreButton = document.getElementById("expoloreRedirect");

headerDownloadButton.addEventListener("click", function () {
  window.open(
    "https://github.com/JonasTechnik/VS-Hex/releases/latest",
    "_blank"
  );
});
directDownloadButton.addEventListener("click", function () {
  window.open(
    "https://github.com/JonasTechnik/VS-Hex/releases/latest",
    "_blank"
  );
});

contactButton.addEventListener("click", function () {
  window.open("../../contact.html", "_blank");
});

exploreButton.addEventListener("click", function () {
  window.open("https://jonastechnik.github.io", "_blank");
});
