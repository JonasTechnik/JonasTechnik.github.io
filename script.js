var cookieValue = Cookies.get("cookies");
if(cookieValue === undefined){
  
}

const darkModeToggler = document.getElementById('dark-mode-toggle');
var darkmodeValue = Cookies.get("darkmode");
if(darkmodeValue === undefined){
  darkmodeValue = "false";
}
var darkmode = JSON.parse(darkmodeValue);

if(darkmode){
  darkModeToggler.innerHTML = 'Switch to light mode';
  darkmode = true;
  document.body.classList.toggle('dark-mode');
}
darkModeToggler.addEventListener('click', () => {
  if(darkmode === false){
    darkModeToggler.innerHTML = 'Switch to light mode';
    darkmode = true;
    Cookies.set("darkmode", true)
  }else{
    darkModeToggler.innerHTML = 'Switch to dark mode';
    darkmode = false;
    Cookies.set("darkmode", false)
  }
  document.body.classList.toggle('dark-mode');
});

function askCookies(){
  var userPermission = confirm("Do you give us permission to use cookies on your device?");
      if (userPermission == true) {
        Cookies.set("cookies", "true")
      }
}