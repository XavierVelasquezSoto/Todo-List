const formElement = document.getElementById('form');
const imgElement = document.getElementById('img'); //switch theme
const inputTodoListElement = document.getElementById('input-todo-list'); //input

//div vacio check
const wordListElement = document.getElementById('word-list');
//

const taskCounterElement = document.getElementById('task-counter'); // contador tareas
const taskCleanElement = document.getElementById('task-clean'); //limpia tareas

//

const buttonFiltersElement = document.getElementById('button-filters');

let tasks = [];

//button filters task

const filterTaskButton = event => {
  const filter = event.target.dataset.filter;
  let filteredTasks = tasks;

  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }
  printAllTasks(filteredTasks);
};

// button filters

const filterSelection = event => {
  event.target.dataset.filter;
  // console.log(event.target.dataset.filter);

  if (!event.target.dataset.filter) {
    return;
  }

  for (const button of buttonFiltersElement.children) {
    button.classList.remove('button-select');
  }
  event.target.classList.add('button-select');
  filterTaskButton(event);
};

//limpiar todas las tareas

const tasksClean = () => {
  tasks = tasks.filter(task => !task.completed);
  // console.log(tasks);
  printAllTasks(tasks);
};

//contador de tareas

const tasksCounter = () => {
  const reviewChecked = tasks.filter(task => !task.completed);
  // console.log(reviewChecked);

  if (reviewChecked.length === 0) {
    taskCounterElement.textContent = `No tasks`;
  } else {
    taskCounterElement.textContent = `${reviewChecked.length} items left`;
  }

  // if (!reviewChecked) return;
};

//verifica tareas

const checkPrint = event => {
  const id = event.target.dataset.id;
  const taskToUpdate = tasks.find(task => String(task.id) === id);
  // console.log(taskToUpdate);
  if (taskToUpdate.completed) {
    taskToUpdate.completed = false;
  } else {
    taskToUpdate.completed = true;
  }
  printAllTasks(tasks);
};

//limpia tareas

const removePrint = event => {
  if (event.target.classList.contains('cancel-list')) {
    const removeTasks = event.target.previousElementSibling.htmlFor;
    // console.log(removeTasks);
    tasks = tasks.filter(task => task.id != removeTasks);
    printAllTasks(tasks);
    tasksClean(tasks);
    // console.log(tasks);
  }
};

//tema oscuro/claro

const switchTheme = () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    imgElement.src = './assets/img/icon-sun.svg';
  } else {
    document.body.classList.add('dark');
    imgElement.src = './assets/img/icon-moon.svg';
  }
};

//imprime tareas

const printAllTasks = tasks => {
  wordListElement.textContent = '';
  fragment = document.createDocumentFragment();

  tasks.forEach(task => {
    const newListDiv = document.createElement('div');
    newListDiv.classList.add('container-checkbox');

    const newListInput = document.createElement('input');
    newListInput.classList.add('test-checkbox');
    newListInput.type = 'checkbox';
    newListInput.checked = task.completed;
    newListInput.id = task.id;
    newListInput.dataset.id = task.id;
    newListInput.addEventListener('change', checkPrint);

    const newListLabel = document.createElement('label');
    newListLabel.classList.add('test-label');
    newListLabel.dataset.id = task.id;
    newListLabel.htmlFor = task.id;
    newListLabel.textContent = task.name;

    const newListImg = document.createElement('img');
    newListImg.src = './assets/img/icon-cross.svg';
    newListImg.classList.add('cancel-list');
    newListImg.addEventListener('click', removePrint);

    newListDiv.append(newListInput, newListLabel, newListImg);
    fragment.append(newListDiv);
  });
  wordListElement.append(fragment);
  tasksCounter();
};

//formulario que recibe y crea tarea de printAlltasks

const formList = event => {
  event.preventDefault(); //previene recargar web

  const wordList = inputTodoListElement.value;
  if (!wordList) return;

  // console.log(wordList);

  tasks.push({
    id: Date.now(),
    name: wordList,
    completed: false
  });

  inputTodoListElement.value = '';
  printAllTasks(tasks);
};

formElement.addEventListener('submit', formList);

taskCleanElement.addEventListener('click', tasksClean);

imgElement.addEventListener('click', switchTheme);

buttonFiltersElement.addEventListener('click', filterSelection);

// <!-- <div class="container-checkbox">
//           <input id="list-word" type="checkbox" class="test-checkbox" />
//           <label for="list-word" class="test-label">test text</label>
//           <img
//             src="./assets/img/icon-cross.svg"
//             alt="cross"
//             class="cancel-list"
//           />
//         </div> -->

/* h1 class=title
  p clas=text (lorem)
  button id=switchtheme class=switch-theme

 */

// const switchElement = document.getElementById("switch-theme");

// const switchTheme = () => {
//   if (document.body.classList.contains("dark")) {
//     document.body.classList.remove("remove");
//     imgElement.src = "./img.etc"
//   } else {
//     document.body.classList.add("dark");
//     imgElement.src = "./img.etc"
//   }
//   //añadir un elemntbyid par cambio de colores
// };

// switchElement.addEventListener("click", switchTheme);
