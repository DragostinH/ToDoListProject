import { format, formatDistance, isToday, parse, parseISO, subDays } from 'date-fns';
import { el } from 'date-fns/locale';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createCalendar from './createCalendar';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createStorageStructure from './createStorageStructure';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';
import inboxPage from './inbox';
import todayPage from './today';
import upcomingPage from './upcoming';

const indexPage = (() => {
    // Always load the inbox first:
    inboxPage();

    const myStorage = window.localStorage;
    const storageKeys = Object.keys(myStorage);

    const inboxBtn = document.querySelector('.inbox-btn');
    const todayBtn = document.querySelector('.today-btn');
    const upcomingBtn = document.querySelector('.upcoming-btn');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const main = document.querySelector('main');
    const ulInbox = document.querySelector('.task-list.inbox');


    inboxBtn.onclick = () => {
        const ulToRemove = document.querySelector('.task-list');
        const titleToRemove = document.querySelector('h2');
        main.removeChild(ulToRemove);
        main.removeChild(titleToRemove);
        inboxPage();
    }

    todayBtn.onclick = () => {
        const ulToRemove = document.querySelector('.task-list');
        const titleToRemove = document.querySelector('h2');
        main.removeChild(ulToRemove);
        main.removeChild(titleToRemove);
        todayPage();
    }
    upcomingBtn.onclick = () => {
        const ulToRemove = document.querySelector('.task-list');
        const titleToRemove = document.querySelector('h2');
        main.removeChild(ulToRemove);
        main.removeChild(titleToRemove);
        upcomingPage();
    }



    // Storage manipulation -----------
    if (storageKeys.length > 0) {
        console.log('There is stored data')
    } else {
        console.log("There isn't stored data.")
        console.log("Created storage structure.")
        createStorageStructure();
    }

    // Testing..--

    const myStorageArr = JSON.parse(localStorage.Projects);
    let inboxArr = [];
    let todayArr = [];
    let upcomingArr = [];

    inboxArr = myStorageArr[0].tasks;
    todayArr = myStorageArr[1].tasks;
    upcomingArr = myStorageArr[2].tasks;

    // If task is today and it isn't already in 'Today' push it.

    inboxArr.forEach((task) => {
        let dueDate = task.taskDueDate;
        let parsedDueDate = parseISO(parse(dueDate, 'dd/MM/yyyy HH:mm', new Date()).toISOString());



        if (isToday(parsedDueDate)) {
            todayArr.push(task);
        }

    })

    console.log(todayArr);
    myStorageArr[1].tasks = todayArr
    myStorage.Projects = JSON.stringify(myStorageArr);

    // console.log(inboxArr)
    // console.log(todayArr)
    // console.log(upcomingArr)


})()