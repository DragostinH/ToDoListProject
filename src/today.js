import { format, formatDistance, isToday, parse, parseISO, subDays } from 'date-fns';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createStoreElements from './createStoredElements';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';
import sortLocalStorage from './sortLocalStorage';
import sortTodayStorage from './sortTodayStorage';

export default function today() {
    // Storage variables----
    const myStorage = JSON.parse(window.localStorage.Projects);
    const storageKeys = Object.keys(myStorage);

    // Today Array
    let todayArray = [];

    let todoForm;
    //DOM elements
    const main = document.querySelector('main');
    const ulForToday = document.createElement('ul');
    addClassToElement(ulForToday, 'task-list', 'today');
    // const addTaskBtn = createAddTaskBtn();
    const targetAddTaskBtn = document.querySelector('.add-task-btn');

    const title = document.createElement('h2')
    title.innerText = 'Today';



    // Put today's date next to the title of the page.
    const spanDate = document.createElement('span');
    const todaysDate = format(new Date(), "E' ' d ' ' LLL")
    spanDate.innerText = `${todaysDate}`
    spanDate.classList.add('span-date');

    // DOM manipulation  -------------------
    todayArray = myStorage[1].tasks;
    console.log(todayArray);
    todayArray.forEach((task) => {
        let taskFromStorage = createTodoEntry(task.taskText, task.taskDescription, task.unformattedDate, task.taskDueDate, task.taskID);
        taskFromStorage.taskParentContainer.classList.add(task.taskPriority);
        let listElement = createListElement();
        listElement.appendChild(taskFromStorage.taskParentContainer);
        ulForToday.appendChild(listElement);
    })


    // Appends -------------------
    title.appendChild(spanDate);

    appendMultiple(main,
        title,
        ulForToday)

    return { today };
}