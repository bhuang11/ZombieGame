/**
   handles the animation and movement of the user
   /**
      function handleUserAnimation() {
     if (CONTROLS.user.forward) {
       var radians = (Math.PI / 180),
       //USER.x += USER.speed;
       USER.y +=  USER.speed;
     }

     if (CONTROLS.user.backward) {
       var radians = (Math.PI / 180),
       //USER.x -= USER.speed * sin;
       USER.y -=  USER.speed;
     }

     if (CONTROLS.user.left) {
       var radians = (Math.PI/180),
           USER.x -= USER.speed;
     }

     if (CONTROLS.user.right) {
       var radians = (Math.PI/180),
           USER.x += USER.speed;
     }
   }

   function RenderNewObject(context) {
     context.fillRect(NEW_OBJECT.x,NEW_OBJECT.y,50)
   }

   function HandleNewObjectMovement() {
     NEW_OBJECT.x += 1;
     NEW_OBJECT.y += 1;
   }

     function runGame() {
     var canvas = document.getElementById('mainCanvas');
     var context = canvas.getContext('2d');
     if (GAME.started) {

       // 1 - Reposition the objects
       handleUserAnimation();
       HandleNewObjectMovement();

       // 2 - Clear the CANVAS
       context.clearRect(0, 0, 600, 300);

       // 3 - Draw new items
       RenderUser(context);
       RenderNewObject(context);

     } else {
       context.font = "30px Arial";
       context.fillText("Game Over      Level " + GAME.level, 135, 200);
     }
     window.requestAnimationFrame(runGame);
   }
   window.requestAnimationFrame(runGame);
   /*


   */

   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   var x = canvas.width/2;
   var y = canvas.height-30;
   var dx = 2;
   var dy = -2;
   var paddleHeight = 10;
   var paddleWidth = 75;
   var paddleY = (canvas.height-paddleHeight)/2;
   var paddleX = (canvas.width-paddleWidth)/2;
   var rightPressed = false;
   var upPressed = false;
   var downPressed = false;
   var leftPressed = false;

   document.addEventListener("keydown", keyDownHandler, false);
   document.addEventListener("keyup", keyUpHandler, false);

   function keyDownHandler(e) {
       if(e.key == "Right" || e.key == "ArrowRight") {
           rightPressed = true;
       }
       else if(e.key == "Left" || e.key == "ArrowLeft") {
           leftPressed = true;
       }
       else if (e.key == "Up" || e.key == "ArrowUp") {
           upPressed = true;
         }
       else if (e.key == "Down" || e.key == "ArrowDown") {
         downPressed = true;
       }

 }

   function keyUpHandler(e) {
       if(e.key == "Right" || e.key == "ArrowRight") {
           rightPressed = false;
       }
       else if(e.key == "Left" || e.key == "ArrowLeft") {
           leftPressed = false;
       }
       else if (e.key == "Up" || e.key == "ArrowUp") {
           upPressed = false;
         }
       else if (e.key == "Down" || e.key == "ArrowDown") {
         downPressed = false;
       }
   }


   function drawPaddle() {
       ctx.beginPath();
       ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
       ctx.fillStyle = "#FF0000";
       ctx.fill();
       ctx.closePath();
   }

   function draw() {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       drawPaddle();

       if(rightPressed) {
           paddleX += 3;
           if (paddleX + paddleWidth > canvas.width){
               paddleX = canvas.width - paddleWidth;
           }
       }
       else if(leftPressed) {
           paddleX -= 3;
           if (paddleX < 0){
               paddleX = 0;
           }
       }
       else if(upPressed) {
           paddleY -= 3;
           if (paddleY < 0){
               paddleY = 0;
           }

       }
       else if(downPressed) {
           paddleY += 3;
           if (paddleY + paddleHeight > canvas.height)
           {
             paddleY = canvas.height - paddleHeight;
           }

       }

       x += dx;
       y += dy;
   }

   setInterval(draw, 10);
