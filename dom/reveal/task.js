const reveal = document.querySelectorAll('.reveal');

function scrollPage() {
  reveal.forEach(item => {
    const { top, bottom} = item.getBoundingClientRect();
    top > window.innerHeight || bottom < 0 ? item.classList.remove('reveal_active') : item.classList.add('reveal_active');
  });
}

window.addEventListener('scroll', scrollPage);