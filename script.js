const mario = document.querySelector(".mario");
const container = document.querySelector("body");
const pipe = document.querySelector(".pipe");
const cloud = document.querySelector(".cloud");

const btn_start = document.querySelector(".btn_start");
const start = document.querySelector('.start');

const crono = document.querySelector(".crono");
const point = document.querySelector(".point");
const gameOver = document.querySelector(".end_game")
const btn_keepOn = document.querySelector(".game_over")

var gameStart = false;

jump();
function jump() {
  container.addEventListener("click", () => {
    if (gameStart) {
      mario.classList.add("jump");

      setTimeout(() => {
        mario.classList.remove("jump");
      }, 1300);
    }
  });
}

// function looping (){
const loop = setInterval(() => {
  const positionMario = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const positionPipe = +window.getComputedStyle(pipe).left.replace("px", "");
  const positionCloud = +window.getComputedStyle(pipe).left.replace("px", "");

  if (positionPipe <= 60 && positionPipe > 0 && positionMario <= 65) {
  
    pipe.style.animation = "none";
    pipe.style.left = `${positionPipe}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${positionMario}px`;
    mario.src = "./image/game-over.png";
    mario.style.width = "3.5rem";

    cloud.style.animation = "none";
    cloud.style.left = `${positionCloud}px`;

    gameOver.style.display="flex";
    clearInterval(loop);
  }
}, 10);

// }

startGame();
function startGame() {
  btn_start.addEventListener("click", () => {
    btn_start.style.display = "none";
    start.style.display = "none";
    cronom();
  });
}

function cronom() {
  var ss = 4;
  var timeOff = 4;
  crono.style.display = "flex";
  const interval = setInterval(() => {
    ss = ss - 1;
    timeOff = timeOff - 1;
   
    if (ss == -1) {
      ss = "Go";
    }
    if (timeOff == -2) {
      ss = "";
      timeOff = 0;
      gameStart = true;
      crono.style.display = "none";
      cloud.style.animation = "animacao_pipe 5.5s linear infinite";
      pipe.style.animation = "animacao_pipe 2s linear infinite";
      clearInterval(interval);
      // looping();
      pointScore();
    }
    crono.innerHTML = ss;
  }, 1000);
}

function pointScore() {
  var points = 0;
  const score = setInterval(() => {
  
    if (mario.src == "http://127.0.0.1:5500/image/game-over.png") {
      point.innerHTML = points; 
      clearInterval(score)
    } else {
      points = points + 1;
      point.innerHTML = points;
    }
   
  }, 1000);
}
keepGame()
function keepGame(){
  const positionPipe = +window.getComputedStyle(pipe).left.replace("px", "");
  
  btn_keepOn.addEventListener("click", ()=>{
    start.style.display = "flex";
    btn_start.style.display = "flex";
    gameOver.style.display="none";
    point.innerHTML = 0;
    mario.src='http://127.0.0.1:5500/image/mario.gif'
    mario.style.width = "5rem";
    mario.style.left = '0px';
    mario.style.bottom = "0";
    pipe.style.right = "200px"; 
    pipe.style.bottom = "0";
    pipe.style.left = '100px';
    window.location.reload();
   
})
}
