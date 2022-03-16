import { formatDistance, subDays } from 'date-fns';
import { join } from 'lodash';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createStoreElements from './createStoredElements';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';

export default function openProject(title) {
    const myStorage = window.localStorage;
    const myStorageArr = JSON.parse(myStorage.Projects);
    const storageKeys = Object.keys(myStorage);


    let currentProjectObject = {};

    let todoForm;
    const main = document.querySelector('main');

    const ul = document.createElement('ul');
    addClassToElement(ul, 'task-list', join(title.toLowerCase().split(' '), '-'));

    const addTaskBtn = createAddTaskBtn();
    const targetAddTaskBtn = document.querySelector('.add-task-btn');



    const pageTitle = document.createElement('h2');
    pageTitle.innerText = `Project: ${title}`;





    // Event listeners ------------------------------
    addTaskBtn.onclick = () => {
        // Remove the Add Task button
        addTaskBtn.style.display = 'none';
        // Create the form for adding new todos
        todoForm = createTodoForm(title).formContainer;
        // Create a li element to append to the main element
        const li = createListElement();
        // append the form to the new li element
        li.appendChild(todoForm);
        ul.insertBefore(li, addTaskBtn);
    }

    // Storage manipulation------------------------------------------------------

    // Find the project in the storage
    myStorageArr.forEach((e) =>{
        let currIndex;
        if(e.name === title){
            currIndex = myStorageArr.indexOf(e)
            currentProjectObject = myStorageArr[currIndex];

        }
    })

    if(currentProjectObject.tasks.length > 0){
        let currProjectTasks = currentProjectObject.tasks;
        let taskFromStorage;
        let listElement;

        currProjectTasks.forEach((el) => {
            taskFromStorage = createTodoEntry(el.taskText, el.taskDescription, el.unformattedDate, el.taskDueDate, el.taskID);

            taskFromStorage.taskParentContainer.classList.add(el.taskPriority);

            listElement = createListElement();
            listElement.appendChild(taskFromStorage.taskParentContainer);

            ul.insertBefore(listElement, targetAddTaskBtn);
        })
    }


    // Iterate through the array and append any tasks it finds to the dom.





    // APPENDS ----------------
    ul.appendChild(addTaskBtn);
    main.appendChild(pageTitle);
    main.appendChild(ul);

    return { openProject };


}