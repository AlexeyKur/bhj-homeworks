const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;
let delay = 1000;

let rotatorTimeout = setTimeout(function timeout() {
  rotator.forEach(item => item.classList.remove('rotator__case_active'));
  index >= rotator.length - 1 ? index = 0 : index++;
  rotator[index].classList.add('rotator__case_active');
  const { speed, color} = (rotator[index].dataset);
  rotator[index].style.color = color;
  delay = speed;
  rotatorTimeout = setTimeout(timeout, delay);
}, delay);