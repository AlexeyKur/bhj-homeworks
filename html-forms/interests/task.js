const interest = Array.from(document.querySelectorAll('.interest__check'));

interest.forEach(item => item.addEventListener('change', (e) => {
  e.preventDefault(); 
  const parent = e.currentTarget.closest('.interest');
  const child = Array.from(parent.querySelectorAll('.interests > .interest'));
  const childFunc = (bool) => {
    child.forEach(i => {
      const childCheck = i.querySelector('.interest__check');
      childCheck.checked = bool;
    });
  }
  if(e.currentTarget.checked) {
    childFunc(true);
  } else if(e.currentTarget.checked === false) {
    childFunc(false);
  }
}));