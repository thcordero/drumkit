//document.querySelector("button").addEventListener("click", handleClick);
/*addEventeListener is listening to events that can happen to the element button,
in this case the event is a click and after it will call the function handleClick.
You have to give two inputs to addEventeListener, the event (as a string) and
a function to call (without the parenthesis).*/
/*The idea of not using parenthesis is give to a function1 another function2 as
an input, so function1 can call function2 later*/

/*function handleClick(){
  alert("I got clicked!");
}*/

/*Another way and the way we are going use for now on is use an anonymous function*/
/*document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
});*/

/*With this code we can listen all the buttons of the drum when we click them*/
var drumbuttons = document.querySelectorAll(".drum");

for (i = 0; i < drumbuttons.length; i++) {
  drumbuttons[i].addEventListener("click", function() {
    //this.style.color="white"; //to know with button trigger the event 'click' and call the function. It give you back the HTML element
    drumSound(this.innerHTML);

    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  drumSound(event.key);

  buttonAnimation(event.key);
});

function drumSound(soudTrigger) {
  switch (soudTrigger) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:

  }
}
/* Usisng the addEventListener method applied to the whole document and keypress as an event,
we are just waiting that in any moment a key will be press while the website is running*/
/*With document.addEventListener("keypress", function(event) {
  drumSound(event.key);
}); we are waitin for any key to be press. When we create the anonymous function we also add a variable
and the function addEventListener give us back the object related to keypress. with event.key we
get which key we had pressed. Then we you use the function drumSound (); to make the correct sound.*/

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
