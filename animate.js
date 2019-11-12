
   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   var x = canvas.width/2;
   var y = canvas.height-30;
   var dx = 2;
   var dy = -2;
   var paddleHeight = 10;
   var paddleWidth = 75;
   var zombieY = 75;
   var zombieX = Math.random()*1000;
   var paddleY = (canvas.height-paddleHeight)-30;
   var paddleX = (canvas.width-paddleWidth)-30;
   var ballX = (canvas.width-paddleWidth)+5;
   var ballY = (canvas.height-paddleHeight)-35;
   var isHit = false;
   var spacePressed = false;
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
       else if (e.key == " ")
       {
         spacePressed = true;
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
       // else if (e.key == " " )
       //  {
       //   downPressed = false;
       // }
   }

   function drawZombie ()
   {
      ctx.beginPath();
      ctx.arc(zombieX, zombieY, 20, 0, 2 * Math.PI);
      ctx.fillStyle ="#008000";
      ctx.fill();
      ctx.closePath();
      if (!isHit)
      {
        zombieY +=.75;
      }

   }


   function drawPaddle() {
       ctx.beginPath();
       ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
       ctx.fillStyle = "#FF0000";
       ctx.fill();
       ctx.closePath();
   }

   function drawBall () {
      ctx.beginPath();
      ctx.arc (ballX, ballY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "FFFF00";
      ctx.fill();
      ctx.closePath();
   }

   function isHit ()
   {
     if ((zombieX-20<=ballX&&ballX<=zombieX+20) && (zombieY-20 <=ballY&&ballY<=zombieY+20))
     {
       zombieY=0;
       zombieX=0;
     }
   }
   function draw() {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       drawPaddle();

       if(rightPressed) {
           paddleX += 3;
           ballX +=3;
           if (paddleX + paddleWidth > canvas.width){
               paddleX = canvas.width - paddleWidth;
           }
       }
       else if(leftPressed) {
           paddleX -= 3;
           if (spacePressed == false)
           {
             ballX -=3;
           }
           if (paddleX < 0){
               paddleX = 0;
           }
       }
       else if(upPressed) {
           paddleY -= 3;
           if (spacePressed == false)
           {
             ballY -=3;
           }
           if (paddleY < 0){
               paddleY = 0;
           }

       }
       else if(downPressed) {
           paddleY += 3;
           if (spacePressed == false)
           {
             ballY +=3;
           }

           if (paddleY + paddleHeight > canvas.height)
           {
             paddleY = canvas.height - paddleHeight;
           }
       }
       else if (spacePressed)
       {
         ballY -=3;
         if (ballY > canvas.height)
         {
           ballY = (canvas.height-paddleHeight)-35;
         }
       }



       x += dx;
       y += dy;

       drawZombie();
       drawBall();
       isHit();
   }



   setInterval(draw, 10);
