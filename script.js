const inputElement = document.querySelector(".task-input");
const addTaskButton = document.querySelector(".task-button");

const tasksContainer = document.querySelector(".tarefas-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  console.log(inputIsValid);

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

   