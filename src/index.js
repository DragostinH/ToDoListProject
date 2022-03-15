import { addDays, format, formatDistance, isFuture, isToday, parse, parseISO, subDays } from 'date-fns';
import { el } from 'date-fns/locale';
import { takeRight } from 'lodash';
import createSideBarProjectButtons from './createSideBarProjectButtons';
import createStorageStructure from './createStorageStructure';
import inboxPage from './inbox';
import sortLocalStorage from './sortLocalStorage';
import sortSideBarStorage from './sortSideBarStorage';
import todayPage from './today';
import upcomingPage from './upcoming';

const indexPage = (() => {
    // Always load the inbox first:
    inboxPage();

    const myStorage = window.localStorage;
    const storageKeys = Object.keys(myStorage);
    let myStorageArr = [];


    const inboxBtn = document.querySelector('.inbox-btn');
    const todayBtn = document.querySelector('.today-btn');
    const upcomingBtn = document.querySelector('.upcoming-btn');
    const main = document.querySelector('main');
    const addProjectBtn = document.querySelector('.projects-btn')

    addProjectBtn.onclick = () => {
        addProjectBtn.disabled = true;
        createSideBarProjectButtons();
    }

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
        sortLocalStorage().sortTodayPage;
        todayPage();
    }
    upcomingBtn.onclick = () => {
        const ulToRemove = document.querySelector('.task-list');
        const titleToRemove = document.querySelector('h2');
        main.removeChild(ulToRemove);
        main.removeChild(titleToRemove);
        sortLocalStorage().sortUpcomingPage;
        upcomingPage();
    }



    // Storage manipulation -----------
    if (storageKeys.length > 0) {
        myStorageArr = JSON.parse(window.localStorage.Projects);
        console.log('There is stored data')
    } else {
        console.log("There isn't stored data.")
        console.log("Created storage structure.")
        createStorageStructure();
    }

    if (myStorageArr.length > 3) {
        sortSideBarStorage();
    }

    // Testing..--
    // What to take. array.lenght = 8 -> Remove the first 3 elements = 5





})()