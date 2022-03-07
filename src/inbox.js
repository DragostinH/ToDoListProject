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
    let inboxArray = [];
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


    let todoForm;



    // Event listeners -------------
    addTaskBtn.onclick = () => {
        // Remove the Add Task button
        addTaskBtn.style.display = 'none';
        // Create the form for adding new todos
        todoForm = createTodoForm(inboxArray).formContainer;
        // Create a li element to append to the main element
        const li = createListElement();
        // append the form to the new li element
        li.appendChild(todoForm);
        ulForInbox.insertBefore(li, addTaskBtn);

        // if (storageKeys.length > 0) {
        //     inboxArray[0] = JSON.parse(myStorage.storage);
        //     let storedElements = createStoreElements(inboxArray);
        //     storedElements.forEach(element => {
        //         let liElement = createListElement();
        //         liElement.appendChild(element);
        //         ulForInbox.insertBefore(liElement, targetAddTaskBtn);
        //     });
        // } else {
        //     inboxArray[0] = {
        //         name: 'Inbox',
        //         tasks: []
        //     }

        // }
    }
    // Storage manipulation-------------
    if (storageKeys.length > 0) {
        inboxArray[0] = JSON.parse(myStorage.storage);
        let storedElements = createStoreElements(inboxArray);
        storedElements.forEach(element => {
            let liElement = createListElement();
            liElement.appendChild(element);
            ulForInbox.insertBefore(liElement, targetAddTaskBtn);
        });

    } else {
        inboxArray[0] = {
            name: 'Inbox',
            tasks: []
        }

    }


    console.log(inboxArray);


    // APPENDS ----------------
    ulForInbox.appendChild(addTaskBtn);
    main.appendChild(pageTitle);
    main.appendChild(ulForInbox);

    return { inboxPage };
}