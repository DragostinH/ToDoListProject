import { formatDistance, subDays } from 'date-fns';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';

const indexPage = (() => {
    // In the main index.js function we save every dom element we will be working with in a variable.
    // This includes the "main" content element, sidebar and header.

    

    const taskListInbox = document.querySelector('.task-list.inbox');
    let todoForm;
    const inboxLiElements = [];

    const addTaskBtn = createAddTaskBtn();

    localStorage.setItem('index', taskListInbox);








    // Event listeners -------------
    addTaskBtn.onclick = () => {
        // Remove the Add Task button
        addTaskBtn.style.display = 'none';
        // Create the form for adding new todos
        todoForm = createTodoForm(inboxLiElements).formContainer;
        // Create a li element to append to the main element
        const li = createListElement();
        // append the form to the new li element
        li.appendChild(todoForm);

        taskListInbox.insertBefore(li, addTaskBtn);


    }



    // APPENDS ----------------
    taskListInbox.appendChild(addTaskBtn);



})()