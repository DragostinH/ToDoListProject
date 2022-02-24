import createTodoEntry from "./createTodoEntry";

export default function postTaskFunction(textArea, taskDescription, addTaskBtn) {
    const dropDown = document.querySelector('.dropdown-btn');
    console.log(dropDown)

    
    const currentForm = document.querySelector('.form-container');
    const todoElement = createTodoEntry(textArea.value, taskDescription.value);
    console.log(todoElement);


  

    if (dropDown.value === 'A') {
        todoElement.classList.add('priorityA');
    } else if (dropDown.value === 'B') {
        todoElement.classList.add('priorityB');

    } else if (dropDown.value === 'C') {
        todoElement.classList.add('priorityC');

    } else if (dropDown.value === 'D') {
        todoElement.classList.add('priorityD');

    } else {
        todoElement.classList.add('no-priority');
    }

    currentForm.parentElement.appendChild(todoElement);
    currentForm.parentElement.removeChild(currentForm);
    addTaskBtn.style.display = 'block';
  
}