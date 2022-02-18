import { formatDistance, subDays } from 'date-fns';
import { tr } from 'date-fns/locale';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createTodoForm from './createTodoForm';

const indexPage = (() => {
    // In the main index.js function we save every dom element we will be working with in a variable.
    // This includes the "main" content element, sidebar and header.

    const taskListInbox = document.querySelector('.task-list.inbox');
    let todoForm;
    const arrayOfTaskObjects = [];
    const addTaskBtn = createAddTaskBtn();








    // Event listeners -------------
    addTaskBtn.onclick = () => {
        addTaskBtn.style.display = 'none';
        todoForm = createTodoForm().formContainer;
        const li = createListElement();
        li.appendChild(todoForm);





        taskListInbox.insertBefore(li, addTaskBtn);


    }


    // APPENDS ----------------
    taskListInbox.appendChild(addTaskBtn);



})()