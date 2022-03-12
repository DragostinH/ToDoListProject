import { formatDistance, subDays } from 'date-fns';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createStoreElements from './createStoredElements';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';

export default function inboxPage() {
    const myStorage = window.localStorage;
    const storageKeys = Object.keys(myStorage);
    let todoForm;
    const main = document.querySelector('main');
    const ulForInbox = document.createElement('ul');
    addClassToElement(ulForInbox, 'task-list', 'inbox');
    const ul = document.querySelector('.task-list.inbox')
    const addTaskBtn = createAddTaskBtn();
    const targetAddTaskBtn = document.querySelector('.add-task-btn');


    // The index page always defaults to Inbox 
    // With every page we create the HTML elements.
    // This includes the "main" content element, sidebar and header.


    const pageTitle = document.createElement('h2');
    pageTitle.innerText = 'Inbox';





// Event listeners -------------
    addTaskBtn.onclick = () => {
        // Remove the Add Task button
        addTaskBtn.style.display = 'none';
        // Create the form for adding new todos
        todoForm = createTodoForm().formContainer;
        // Create a li element to append to the main element
        const li = createListElement();
        // append the form to the new li element
        li.appendChild(todoForm);
        ulForInbox.insertBefore(li, addTaskBtn);
    }

// Storage manipulation------------------------------------------------------
    // Check if there are items in storage
    if (storageKeys.length > 0) {
        let listElement;
        let taskFromStorage;
        // Parse the storage structure into an array
        let parsedArr = JSON.parse(myStorage.Projects);
        // Iterate through the parsed Array and find the 'Inbox' element
        parsedArr.forEach((element) => {
            if (element.name === 'Inbox') {
                // Iterate through the Inbox array and create the tasks and append to the DOM
                element.tasks.forEach((task) => {
                    taskFromStorage = createTodoEntry(task.taskText, task.taskDescription, task.unformattedDate, task.taskDueDate, task.taskID);
                    taskFromStorage.taskParentContainer.classList.add(task.taskPriority);
                    listElement = createListElement();
                    listElement.appendChild(taskFromStorage.taskParentContainer);
                    ulForInbox.insertBefore(listElement, targetAddTaskBtn);
                })
            }
        })
    }





    // APPENDS ----------------
    ulForInbox.appendChild(addTaskBtn);
    main.appendChild(pageTitle);
    main.appendChild(ulForInbox);

    return { inboxPage };
}