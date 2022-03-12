import { format, formatDistance, isToday, parse, parseISO, subDays } from 'date-fns';
import addClassToElement from './addClassToElement';
import appendMultiple from './appendMultiple';
import createAddTaskBtn from './createAddTaskBtn';
import createDiv from './createDiv';
import createListElement from './createListElement';
import createStoreElements from './createStoredElements';
import createTodoEntry from './createTodoEntry';
import createTodoForm from './createTodoForm';

export default function today() {
    // Storage variables----
    const myStorage = window.localStorage;
    const storageKeys = Object.keys(myStorage);

    // Today Array
    let todayArray = [];

    let todoForm;
    //DOM elements
    const main = document.querySelector('main');
    const ulForToday = document.createElement('ul');
    addClassToElement(ulForToday, 'task-list', 'today');
    const ul = document.querySelector('.task-list.today')
    // const addTaskBtn = createAddTaskBtn();
    const targetAddTaskBtn = document.querySelector('.add-task-btn');

    const title = document.createElement('h2')
    title.innerText = 'Today';

    const spanDate = document.createElement('span');
    const todaysDate = format(new Date(), "E' ' d ' ' LLL")
    spanDate.innerText = `${todaysDate}`
    spanDate.classList.add('span-date');
    title.appendChild(spanDate);

    // Event listeners -------------------
    // addTaskBtn.onclick = () => {
    //     // Remove the Add Task button
    //     addTaskBtn.style.display = 'none';
    //     // Create the form for adding new todos
    //     todoForm = createTodoForm().formContainer;
    //     // Create a li element to append to the main element
    //     const li = createListElement();
    //     // append the form to the new li element
    //     li.appendChild(todoForm);
    //     ulForToday.insertBefore(li, addTaskBtn);
    // }

    // Storage manipulation --------------

    if (storageKeys.length > 0) {
        let listElement;
        let taskFromStorage;
        let parsedDate;
        let newTasksArray = [];
        // Parse the storage structure into an array
        let parsedArr = JSON.parse(myStorage.Projects);
        // Iterate through the parsed Array and find all the tasks that should be appended to 'Today'.
        parsedArr.forEach((element) => {
            element.tasks.forEach((task) => {
                let str = `${task.taskDueDate}`;
                let str2 = parseISO(parse(str, 'dd/MM/yyyy HH:mm', new Date()).toISOString());

                // Make sure you don't duplicate the task if it's already in the Today array.
                // Also we need to add the element so we can append the taskParentElement to the DOM.

                if (isToday(str2)) {
                   let listElement = createListElement();
                   console.log(element);
                   console.log(task);
                    // listElement.appendChild(task);
                    // ulForInbox.insertBefore(listElement, targetAddTaskBtn);
                    newTasksArray.push(task);
                    console.log(task);
                }

            })
        })

        parsedArr[1].tasks = newTasksArray;
        myStorage.Projects = JSON.stringify(parsedArr);
    }


    // Appends -------------------
    // ulForToday.appendChild(addTaskBtn);
    appendMultiple(main,
        title,
        ulForToday)

    return { today };
}