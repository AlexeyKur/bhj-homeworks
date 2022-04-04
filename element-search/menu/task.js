const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));
const closeMenu = () => {
  for(let j = 0; j < menuSub.length; j++) {
    menuSub[j].classList.remove('menu_active');
  }
}


for(let i = 0; i < menuLinks.length; i++) {
  const link = menuLinks[i].closest('.menu__item');
  const sub = link.querySelector('.menu_sub');
  
  menuLinks[i].onclick = () => {
    if(sub === null) {
      return true;
    }
    if(sub.classList.contains('menu_active')) {  
      closeMenu();
      return false;
    }else if(link && sub != null) {
      closeMenu();
      sub.classList.add('menu_active');
      return false;
    }
  }
}
