const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book__content');
const textColor = document.querySelector('.book__control_color');
const textColorItem = Array.from(textColor.querySelectorAll('.color'));
const bgColor = document.querySelector('.book__control_background');
const bgColorItem = Array.from(bgColor.querySelectorAll('.color'));

fontSize.forEach(item => item.addEventListener('click', (e) => {
  fontSize.forEach(item => item.classList.remove('font-size_active'));
  e.target.classList.add('font-size_active');
  const { size } = item.dataset;
  book.classList.remove('book_fs-small', 'book_fs-big');
  if(size) {
    book.classList.add('book_fs-' + size);
  }
  event.preventDefault();
}));

textColorItem.forEach(item => item.addEventListener('click', (e) => {
  textColorItem.forEach(item => item.classList.remove('color_active'));
  e.target.classList.add('color_active');
  const { textColor } = item.dataset;
  book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
  book.classList.add('book_color-' + textColor);
  event.preventDefault();
}));

bgColorItem.forEach(item => item.addEventListener('click', (e) => {
  bgColorItem.forEach(item => item.classList.remove('color_active'));
  e.target.classList.add('color_active');
  const { bgColor } = item.dataset;
  book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
  book.classList.add('book_bg-' + bgColor);
  event.preventDefault();
}));