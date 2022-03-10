import { formatDistance, subDays } from 'date-fns';
import { el } from 'date-fns/locale';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
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





})()