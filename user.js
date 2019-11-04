// Populate a global variable for the spaceship
function InitializeUser() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  USER = {
    x : 300,
    y : 150,
    rotation : 0,
    health : 3,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : -3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : -2,
       	y : -3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : USER.x,
        y : USER.y,
    },
    scale : 5,
    speed : 3,
    initialized : true,
    bullets : []
  };
}

/**  RenderSpaceship
 *
 *  Renders all spaceship points after adjusting them for the rotation and position
 *    in space
 */
function RenderUSER(context) {
  if (!USER.initialized) {
    return;
  }
}
