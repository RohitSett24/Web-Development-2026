// Ex. 10c 
console.log(document.querySelector('.js-button').classList.contains('js-button'));

// Ex. 10d - 10g
const gamingBtn = document.querySelector('.js-gaming-btn');
const musicBtn = document.querySelector('.js-music-btn');
const techBtn = document.querySelector('.js-tech-btn');

function toggleBtn(button) {
  if(!button.classList.contains('is-toggled')) {
    previousButtonOff();
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function previousButtonOff() {
  const prevBtn = document.querySelector('.is-toggled');
  if(prevBtn) {
    prevBtn.classList.remove('is-toggled');
  }
}

gamingBtn.addEventListener('click', () => {
  toggleBtn(gamingBtn);
});

musicBtn.addEventListener('click', () => {
  toggleBtn(musicBtn);
});

techBtn.addEventListener('click', () => {
  toggleBtn(techBtn);
});