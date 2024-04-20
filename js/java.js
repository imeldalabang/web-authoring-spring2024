function changeStyle(newStyle){
	document.getElementById('color').setAttribute('href', newStyle);
}

var userName=prompt("Welcome to our site!\nFor more fun, Please write your name in capital letters. Thanks!");

document.getElementById('entry').innerHTML = " HAVE FUN " + userName;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
