const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const mainSlide = document.querySelector('.main-slide')
const sidebar = document.querySelector('.sidebar');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSliderBar = (direction) => {
  const height = container.clientHeight;
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

upBtn.addEventListener('click', () => {
  changeSliderBar('up')
})

downBtn.addEventListener('click', () => {
  changeSliderBar('down')
})

document.addEventListener('keydown', (evt) => {
  evt.key === 'ArrowDown' && changeSliderBar('down')
  evt.key === 'ArrowUp' && changeSliderBar('up')
});


