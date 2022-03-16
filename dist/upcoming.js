import { format, formatDistance, subDays } from 'date-fns';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createStoreElements from './createStoredElements';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';

export default function upcoming(){
    // Storage variables----
    const myStorage = JSON.parse(window.localStorage.Projects);
    const storageKeys = Object.keys(myStorage);

    // Array for the upcoming page
    let upcomingArr = [];

    let todoForm;
    //DOM elements
    const main = document.querySelector('main');
    const ulForUpcoming = document.createElement('ul');
    addClassToElement(ulForUpcoming, 'task-list', 'upcoming');
    const title = document.createElement('h2')
 
    title.innerText = 'Upcoming';

    // Event listeners -------------------
    upcomingArr = myStorage[2].tasks;
    console.log(upcomingArr);
    upcomingArr.forEach((task) => {
        let taskFromStorage = createTodoEntry(task.taskText, task.taskDescription, task.unformattedDate, task.taskDueDate, task.taskID);
        taskFromStorage.taskParentContainer.classList.add(task.taskPriority);
        let listElement = createListElement();
        listElement.appendChild(taskFromStorage.taskParentContainer);
        ulForUpcoming.appendChild(listElement);
    })

    // Storage manipulation --------------


    // Appends -------------------
    // ulForUpcoming.appendChild(addTaskBtn);
    appendMultiple(main,
        title,
        ulForUpcoming)

    return { upcoming };
}