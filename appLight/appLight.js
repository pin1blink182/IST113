let lightSwitch = document.getElementById("bswitch");
let bodyColor = document.getElementById("body");
let switchOn = true;
lightSwitch.addEventListener("click", switchToggle);

function switchToggle() {
  if(switchOn){
  lightSwitch.style.float = "right";
  bodyColor.style.background = "black";
  switchOn = false;
}
  else {
    lightSwitch.style.float = "left";
    bodyColor.style.background = "white";
    switchOn = true;
  }
}