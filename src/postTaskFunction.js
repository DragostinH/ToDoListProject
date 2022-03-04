import createTodoEntry from "./createTodoEntry";

export default function postTaskFunction(textArea, taskDescription, addTaskBtn) {
    const dropDown = document.querySelector('.dropdown-btn');

    const currentForm = document.querySelector('.form-container');
    const todoElement = createTodoEntry(textArea.value, taskDescription.value)




    if (dropDown.value === 'A') {
        todoElement.taskParentContainer.classList.add('priorityA');
        todoElement.taskObject.taskPriority = "A";

    } else if (dropDown.value === 'B') {
        todoElement.taskParentContainer.classList.add('priorityB');
        todoElement.taskObject.taskPriority = "B";
    } else if (dropDown.value === 'C') {
        todoElement.taskParentContainer.classList.add('priorityC');
        todoElement.taskObject.taskPriority = "C";
    } else if (dropDown.value === 'D') {
        todoElement.taskParentContainer.classList.add('priorityD');
        todoElement.taskObject.taskPriority = "D";
    } else {
        todoElement.taskParentContainer.classList.add('no-priority');
        todoElement.taskObject.taskPriority = "no-priority";
    }


    currentForm.parentElement.appendChild(todoElement.taskParentContainer);
    currentForm.parentElement.removeChild(currentForm);
    addTaskBtn.style.display = 'block';

    return { todoElement }

}