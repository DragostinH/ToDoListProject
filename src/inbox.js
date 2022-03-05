import { formatDistance, subDays } from 'date-fns';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';

export default function inboxPage() {
    const main = document.querySelector('main');
    const ulForInbox = document.createElement('ul');
    addClassToElement(ulForInbox, 'task-list', 'inbox');
    const ul = document.querySelector('.task-list.inbox')
    const addTaskBtn = createAddTaskBtn();
    const targetAddTaskBtn = document.querySelector('.add-task-btn');
    

    // The index page always defaults to Inbox 
    // With every page we create the HTML elements.
    // This includes the "main" content element, sidebar and header.

    const storageKeys = Object.keys(localStorage);
    console.log(Object.keys(localStorage));
    for (let key of storageKeys) {
        let currItem = JSON.parse(localStorage.getItem(key));
        let storageTodo = createTodoEntry(currItem.taskText, 
            currItem.taskDescription);
        ul.insertBefore(storageTodo.taskParentContainer, addTaskBtn);

    }
    const pageTitle = document.createElement('h2');
    pageTitle.innerText = 'Inbox';



    // const taskListInbox = document.querySelector('.task-list.inbox');

    let todoForm;

    // const inboxTaskArray = [
    //     { priority: "A" },
    //     { priority: "B" },
    //     { priority: "C" },
    //     { priority: "D" },
    //     { priority: "no-priority" }
    // ];

    // const inboxTaskArray = []



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



    // APPENDS ----------------
    ulForInbox.appendChild(addTaskBtn);
    main.appendChild(pageTitle);
    main.appendChild(ulForInbox);

    // taskListInbox.appendChild(addTaskBtn);

    return { inboxPage };
}