let count = document.getElementById('timer');

let timer = () => {
  count.textContent -= 1;
    if(+count.textContent === -1) {
      count.textContent = 0;
      alert('Вы победили в конкурсе!');
      clearInterval(interval);
    }
}

let interval = setInterval(timer, 1000);