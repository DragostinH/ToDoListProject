import appendMultiple from "./appendMultiple";
import createDiv from "./createDiv";
import generateRandomNum from "./randomNumGenerator";

export default function createTodoEntry(text, description) {
    const randomNum = generateRandomNum();

    const taskText = document.createElement('span');
    taskText.innerText = text;

    const taskDescription = document.createElement('p');
    taskDescription.innerText = description;
    taskDescription.classList.add('todo-description')

    const ulElement = document.querySelector('.task-list.inbox');

    const taskContainer = createDiv();

    const taskTextContainer = createDiv();

    taskContainer.classList.add('task-container');

    taskContainer.id = randomNum;

    const taskCheckbox = document.createElement('button');
    taskCheckbox.innerText = '?';
    taskCheckbox.classList.add('task-checkbox');


    // Adding an event listener to the checkbox button so it removes the to do entry by using the unique ID that gets generated with each todoEntry that we create
    taskCheckbox.onclick = () => {

        const todoEntryToRemove = document.getElementById(taskContainer.id);
        ulElement.removeChild(todoEntryToRemove.parentElement);
    }




    appendMultiple(taskTextContainer, taskText, taskDescription)
    appendMultiple(taskContainer, taskCheckbox, taskTextContainer);

    return { taskContainer };

}