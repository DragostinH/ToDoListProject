import appendMultiple from "./appendMultiple";
import createCheckmark from "./createCheckmark";
import createDiv from "./createDiv";
import createPriorityDropdown from "./createPriorityDropdown";
import createTaskText from "./createTaskText";
import generateRandomNum from "./randomNumGenerator";
import createTaskDescription from "./taskDescription";

export default function createTodoEntry(text, description, unformattedDate, dueDate, id = 0) {
    const randomNum = generateRandomNum();

    const myStorage = localStorage;
    const taskParentContainer = createDiv();
    const dateText = document.createElement('p');
    dateText.innerText = dueDate
    const dateDiv = createDiv();
    dateDiv.classList.add('date-container');

    taskParentContainer.classList.add('task-container');
    if (id === 0) {
        taskParentContainer.id = randomNum;

    } else {
        taskParentContainer.id = id;
    }

    const taskObject = {
        taskID: taskParentContainer.id,
        taskText: text,
        taskDescription: description,
        taskPriority: "",
        unformattedDate: unformattedDate,
        taskDueDate: dueDate
    }

    const taskTextContainer = createDiv();

    const taskText = createTaskText(text);

    const taskDescription = createTaskDescription(description);

    const taskCheckmark = createCheckmark();

    // Adding an event listener to the checkbox button so it removes the to do entry by using the unique ID that gets generated with each todoEntry that we create
    taskCheckmark.onclick = () => {
        // let arr = JSON.parse(myStorage.Inbox).tasks;
        let parsedStorage = JSON.parse(myStorage.Projects);
        let keys = Object.keys(myStorage);

        let pageTitle = document.querySelector('h2').innerText;
        let taskIDToDelete = taskParentContainer.id;
        const ulElement = document.querySelector('.task-list');
        const todoEntryToRemove = document.getElementById(taskParentContainer.id);
        ulElement.removeChild(todoEntryToRemove.parentElement)

        parsedStorage.find((element) => {

            if (element.name === pageTitle) {
                element.tasks.find((taskToDelete) => {
                    console.log(taskToDelete);
                    if (taskToDelete.taskID === taskIDToDelete) {
                        let indexToDelete = (element.tasks.indexOf(taskToDelete));
                        element.tasks.splice(indexToDelete, 1);
                        myStorage.Projects = JSON.stringify(parsedStorage);
                    }
                })
            }
        })


    }



    // APPENDS ---------------------

    dateDiv.appendChild(dateText);

    appendMultiple(taskTextContainer,
        taskText,
        taskDescription,
        dateDiv);

    appendMultiple(taskParentContainer,
        taskCheckmark,
        taskTextContainer);



    return {
        taskParentContainer,
        taskTextContainer,
        taskObject
    }

}


