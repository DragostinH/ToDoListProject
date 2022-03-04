import { formatDistance, subDays } from 'date-fns';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';
import inboxPage from './inbox';

const indexPage = (() => {
    // Always load the inbox first:
    inboxPage();

    const inboxBtn = document.querySelector('.inbox-btn')
    const todayBtn = document.querySelector('.today-btn')
    const upcomingBtn = document.querySelector('.upcoming-btn')




})()