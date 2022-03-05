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

    // Create the main array that contains all of Inbox task objects into one. It should be seperated by priorities.

    const inboxBtn = document.querySelector('.inbox-btn');
    const todayBtn = document.querySelector('.today-btn');
    const upcomingBtn = document.querySelector('.upcoming-btn');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const main = document.querySelector('main');
    const ulInbox = document.querySelector('.task-list.inbox');








})()