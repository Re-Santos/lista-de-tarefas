const inputElement = document.querySelector(`task-conteudo`);
const addTaskButton = document.querySelector(`task-button`);

const validateInput= () => inputElement.ariaValueMax.trim().length>0;

const handleAddtask = () => {
    const inputIsValide = validateInput();

 console.log(inputIsValide);

    if (!inputIsValide){
        return inputElement.classList.add(`Error`);
    }
};

const handleInputChange = () => {
    const inputValido = validateInput();

    if (inputValido){
        return inputElement.classList.remove(`error`);
    }
};

addTaskButton.addEventListener(`click`, () => handleAddtask());
inputElement.addEventListener(`change`, () => handleInputChange());