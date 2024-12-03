const formElement = document.getElementById("form");

const inputTodoListElement = document.getElementById("input-todo-list");

const wordListElement = document.getElementById("word-list");

const tasks = [
  {
    id: Date.now(),
    name: "Comprar el pan",
    completed: false,
  },
];

const newList = (tasks) => {
  fragment = document.createDocumentFragment();

  tasks.forEach((task) => {
    const newListDiv = document.createElement("div");
    newListDiv.classList.add("test-checkbox");

    const newListInput = document.createElement("input");
    newListInput.classList.add("container-checkbox");
    newListInput.type = "checkbox";
    newListInput.id = task.id;

    const newListLabel = document.createElement("label");
    newListLabel.classList.add("test-label");
    newListLabel.htmlFor = task.id;
    newListInput.textContent = task.name;

    const newListImg = document.createElement("img");
    newListImg.src = "./assets/img/icon-cross.svg";
    newListImg.classList.add("cancel-list");

    newListDiv.append(newListInput, newListLabel, newListImg);
    fragment.append(newListDiv);
  });
  wordListElement.append(fragment);
};

const formList = (event) => {
  event.preventDefault();

  const wordList = inputTodoListElement.value;

  console.log(wordList);

  inputTodoListElement.value = "";
  newList(tasks);
};

formElement.addEventListener("submit", formList);

//  <div class="container-checkbox">
//       <input id="list-word" type="checkbox" class="test-checkbox" />
//       <label for="list-word" class="test-label">test text</label>
//       <img
//       src="./assets/img/icon-cross.svg"
//       alt="cross"
//       class="cancel-list"
//       />
//  </div>
