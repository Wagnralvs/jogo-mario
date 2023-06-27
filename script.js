const mario = document.querySelector('.mario');
const container = document.querySelector('body');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud')


jump();
function jump (){
    container.addEventListener("click", ()=>{
        mario.classList.toggle('jump')
        
    })
};

const loop = setInterval(()=>{
    const positionMario = +window.getComputedStyle(mario).bottom.replace("px", '');
    const positionPipe = +window.getComputedStyle(pipe).left.replace("px", '')
    const positionCloud = +window.getComputedStyle(pipe).left.replace("px", '')

    if(positionPipe <= 64 && positionPipe > 0 && positionMario <= 80){
      pipe.style.animation = 'none';
      pipe.style.left = `${positionPipe}px`

       mario.style.animation = 'none'; 
       mario.style.bottom = `${positionMario}px`
       mario.src = './image/game-over.png'
       mario.style.width = '3.5rem'

       cloud.style.animation = 'none'
       cloud.style.left = `${positionCloud}px`

      clearInterval(loop)

    }
}, 10);

