const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));

for(let i = 0; i < menuLinks.length; i++) {
  const link = menuLinks[i].closest('.menu__item');
  const sub = link.querySelector('.menu_sub');
  
  menuLinks[i].onclick = () => {
    for(let j = 0; j < menuSub.length; j++) {
      menuSub[j].classList.remove('menu_active');
    }
    if(link && sub != null) {
      sub.classList.add('menu_active');
      return false;
    }
  }
}