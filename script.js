const inputElement = document.querySelector(`task-conteudo`);
const addTaskButton = document.querySelector(`task-button`);

const validacaoInput = ()=>{
    if (inputElement.ariaValueMax.trim().length>0){
        return true;
    }else{
        return false;
    }
}

const handleaddtask = () => {
    const inputValido = validacaoInput();
    if (!inputValido){
        return inputElement.classList.add(`Error`);
    }
}

addTaskButton.addEventListener(`click`, ()=> handleaddtask());