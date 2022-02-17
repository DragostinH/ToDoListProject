import { formatDistance, subDays } from 'date-fns';
import { tr } from 'date-fns/locale';
import addClassToElement from './addClassToElement';
import createAddTaskBtn from './createAddTaskBtn';
import createTodoForm from './createTodoForm';

const indexPage = (() => {
    // In the main index.js function we save every dom element we will be working with in a variable.
    // This includes the "main" content element, sidebar and header.
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const sidebar = document.querySelector('.sidebar');
    const taskForm = createTodoForm();

    main.appendChild(taskForm);

})()