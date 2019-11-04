/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */
 var canvas = document.getElementById('myCanvas');
 var ctx = canvas.getContext ('2d');
 var x = canvas.width /2;
 var y = canvas.height - 30;

var CONTROLS = {
  user : {
    forward : false,
    back : false,
    left: false,
    right: false,
  },

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.user.forward = true;
      break;
    case "ArrowDown":
      CONTROLS.user.backward = true;
      break;
    case "ArrowLeft":
      CONTROLS.user.left = true;
      break;
    case "ArrowRight":
      CONTROLS.user.right = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.user.forward = false;
      break;
    case "ArrowDown":
      CONTROLS.user.backward = false;
      break;
    case "ArrowLeft":
      CONTROLS.user.left = false;
      break;
    case "ArrowRight":
      CONTROLS.user.right = false;
      break;
    case " ":
    default:
      break;
  }
});
