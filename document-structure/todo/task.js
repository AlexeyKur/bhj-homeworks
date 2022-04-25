const tasksInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let inputText = '';

const taskListAdd = (text) => {
  tasksList.insertAdjacentHTML('beforeend', `<div class="task">
    <div class="task__title">
      ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`);
  tasksInput.value = '';
  const task = Array.from(tasksList.querySelectorAll('.task'));
  task.forEach((item, idx) => {
    const taskRemove = item.querySelector('.task__remove');
    if(taskRemove !== null) {
      taskRemove.addEventListener('click', (e) => {
        e.preventDefault();
        task[idx].remove();
      });
    }
  });
}

tasksInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  if(e.key === 'Enter' && tasksInput.value !== '') {
    taskListAdd(inputText);
  }
  inputText = tasksInput.value;
});

tasksAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.currentTarget && tasksInput.value !== '') {
    taskListAdd(inputText);
  }
});