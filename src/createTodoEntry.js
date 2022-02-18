import appendMultiple from "./appendMultiple";
import createDiv from "./createDiv";
import generateRandomNum from "./randomNumGenerator";

export default function createTodoEntry(text) {
    const ulElement = document.querySelector('.task-list.inbox');
    const taskContainer = createDiv();
    taskContainer.classList.add('task-container');
    const randomNum = generateRandomNum();
    taskContainer.id = randomNum;

    const taskCheckbox = document.createElement('button');
    taskCheckbox.innerText = '?';
    taskCheckbox.classList.add('task-checkbox');


    // Adding an event listener to the checkbox button so it removes the to do entry by using the unique ID that gets generated with each todoEntry that we create
    taskCheckbox.onclick = () => {
        
        const todoEntryToRemove = document.getElementById(taskContainer.id);
        ulElement.removeChild(todoEntryToRemove.parentElement);
    }

    const taskText = document.createElement('span');
    taskText.innerText = text;

    appendMultiple(taskContainer, taskCheckbox, taskText);

    return { taskContainer };

}