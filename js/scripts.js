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
  wordListElement.textContent = "";

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
    newListLabel.textContent = task.name;
    newListLabel.for = "list-word";

    const newListImg = document.createElement("img");
    newListImg.src = "./assets/img/icon-cross.svg";
    newListImg.classList.add("cancel-list");

    newListDiv.append(newListInput, newListLabel, newListImg);
    fragment.append(newListDiv);
  });
  wordListElement.append(fragment);
};
newList(tasks);

const inputList = (event) => {
  wordList = event.target.value;
  console.log(wordList);
  newList(tasks);
};

inputTodoListElement.addEventListener("input", inputList);

//  <div class="container-checkbox">
//       <input id="list-word" type="checkbox" class="test-checkbox" />
//       <label for="list-word" class="test-label">test text</label>
//       <img
//       src="./assets/img/icon-cross.svg"
//       alt="cross"
//       class="cancel-list"
//       />
//  </div>
