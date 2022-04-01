const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));
const sliderDotsButton = document.querySelector('.slider__dots');
const ArrowPrev = document.querySelector('.slider__arrow_prev');
const ArrowNext = document.querySelector('.slider__arrow_next');

let slideIndex = 0;

showSliders(slideIndex);

function showSliders (n) {
  if(n >= sliderItems.length) {
    slideIndex = 0;
  }

  for(let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove('slider__item_active');
  }

  for(let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].classList.remove('slider__dot_active');
  }
  
  sliderItems[slideIndex].classList.add('slider__item_active');
  sliderDots[slideIndex].classList.add('slider__dot_active');
}

function plusSlides (n) {
  showSliders(slideIndex += 1);
}

function itemDot (n) {
  showSliders(slideIndex = n);
}

ArrowNext.onclick = () => {
  plusSlides(1);
}

ArrowPrev.onclick = () => {
  plusSlides(-1);
}

sliderDotsButton.onclick = (n) => {
  for(let i = 0; i < sliderDots.length; i++) {
    if(n.target.classList.contains('slider__dot') && n.target === sliderDots[i]) {
      itemDot(i);
    }
  }
}