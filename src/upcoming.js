import { formatDistance, subDays } from 'date-fns';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createStoreElements from './createStoredElements';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';

export default function upcoming(){
    // Storage variables----
    const myStorage = window.localStorage;
    const storageKeys = Object.keys(myStorage);


    let todoForm;
    //DOM elements
    const main = document.querySelector('main');
    const ulForUpcoming = document.createElement('ul');
    addClassToElement(ulForUpcoming, 'task-list', 'upcoming');
    const ul = document.querySelector('.task-list.upcoming')
    const addTaskBtn = createAddTaskBtn();
    const targetAddTaskBtn = document.querySelector('.add-task-btn');

    const title = document.createElement('h2')
    title.innerText = 'Upcoming';

    // Event listeners -------------------
    addTaskBtn.onclick = () => {
        // Remove the Add Task button
        addTaskBtn.style.display = 'none';
        // Create the form for adding new todos
        todoForm = createTodoForm().formContainer;
        // Create a li element to append to the main element
        const li = createListElement();
        // append the form to the new li element
        li.appendChild(todoForm);
        ulForUpcoming.insertBefore(li, addTaskBtn);
    }

    // Storage manipulation --------------

    if (storageKeys.length > 0) {
        let listElement;
        let taskFromStorage;
        // Parse the storage structure into an array
        let parsedArr = JSON.parse(myStorage.Projects);
        // Iterate through the parsed Array and find the 'Inbox' element
        parsedArr.forEach((element) => {
            if (element.name === 'Upcoming') {
                // Iterate through the Today array and create the tasks and append to the DOM
                element.tasks.forEach((task) => {
                    taskFromStorage = createTodoEntry(task.taskText, task.taskDescription, task.taskID);
                    taskFromStorage.taskParentContainer.classList.add(task.taskPriority);
                    listElement = createListElement();
                    listElement.appendChild(taskFromStorage.taskParentContainer);
                    ulForUpcoming.insertBefore(listElement, targetAddTaskBtn);
                })
            }
        })
    }


    // Appends -------------------
    ulForUpcoming.appendChild(addTaskBtn);
    appendMultiple(main,
        title,
        ulForUpcoming)

    return { upcoming };
}