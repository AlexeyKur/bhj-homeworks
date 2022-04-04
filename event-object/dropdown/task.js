const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownLinks = Array.from(document.querySelectorAll('.dropdown__item'));

const drop = () => {
  dropDownList.classList.contains('dropdown__list_active') ? dropDownList.classList.remove('dropdown__list_active') : 
  dropDownList.classList.add('dropdown__list_active');
  return false;
}

for(let i = 0; i < dropDownLinks.length; i++) {
  dropDownLinks[i].onclick = () => {
    dropDownValue.textContent = dropDownLinks[i].textContent;
    dropDownList.classList.remove('dropdown__list_active');
    return false;
  }
}

dropDownValue.addEventListener('click', drop);