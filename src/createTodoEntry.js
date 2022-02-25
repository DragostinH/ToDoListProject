import appendMultiple from "./appendMultiple";
import createCheckmark from "./createCheckmark";
import createDiv from "./createDiv";
import createPriorityDropdown from "./createPriorityDropdown";
import createTaskText from "./createTaskText";
import generateRandomNum from "./randomNumGenerator";
import createTaskDescription from "./taskDescription";

export default function createTodoEntry(text, description) {
    const ulElement = document.querySelector('.task-list.inbox');

    const randomNum = generateRandomNum();

    const taskParentContainer = createDiv();

    taskParentContainer.classList.add('task-container');

    taskParentContainer.id = randomNum;

    const taskTextContainer = createDiv();

    const taskText = createTaskText(text);

    const taskDescription = createTaskDescription(description);

    const taskCheckbox = createCheckmark();

    // Adding an event listener to the checkbox button so it removes the to do entry by using the unique ID that gets generated with each todoEntry that we create
    taskCheckbox.onclick = () => {
        const todoEntryToRemove = document.getElementById(taskParentContainer.id);
        ulElement.removeChild(todoEntryToRemove.parentElement);
    }

    appendMultiple(taskTextContainer,
        taskText,
        taskDescription);

    appendMultiple(taskParentContainer,
        taskCheckbox,
        taskTextContainer);



    return {
        taskParentContainer,
        taskTextContainer
    }

}


