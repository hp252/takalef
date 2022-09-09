let button1 = document.getElementById("btn1"),
button2 = document.getElementById("btn2"),
icon1 = document.getElementById("icon1"),
icon2 = document.getElementById("icon2"),
ul = document.getElementById("ul");


button1.onclick = function scroll(){

  document.body.scrollTop = 528; // For Safari
  document.documentElement.scrollTop = 528;
  
}

button2.onclick = function scroll(){

  document.body.scrollTop = 650; // For Safari
  document.documentElement.scrollTop = 650;
  
}

icon1.onclick = function ulVisible(){
  ul.classList.remove("hidden");
  icon2.classList.remove("hidden");
}

icon2.onclick = function uldisable(){
  ul.classList.remove("hidden")
}