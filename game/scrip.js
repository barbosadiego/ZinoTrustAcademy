const
  game = document.querySelector('.game'),
  hero = document.querySelector('.hero'),
  vilan = document.querySelector('.vilan')
;

function jump(){
  if(!hero.classList.contains('animate')){
    hero.classList.add('animate');
    vilan.style.animation = 'move 1s infinite linear';
  };
  setTimeout(function(){
    hero.classList.remove('animate');
  }, 500)
}

document.addEventListener('keydown', jump);

// check if hero is alive

let isAlive = setInterval(function(){
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'));

  let vilanLeft = parseInt(window.getComputedStyle(vilan).getPropertyValue('left'));

  // console.log(heroTop, vilanLeft)

  if(vilanLeft < 40 && vilanLeft > 20 && heroTop >= 110){
    vilan.style.animation = 'none';
    alert('Game Over. Press spacebar to restart.')
  }
},10)