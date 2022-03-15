import { format, parseISO } from "date-fns";
import addClassToElement from "./addClassToElement";
import appendMultiple from "./appendMultiple";
import createAddTaskBtn from "./createAddTaskBtn";
import createCalendar from "./createCalendar";
import createDiv from "./createDiv";
import createPriorityDropdown from "./createPriorityDropdown";
import createTodoEntry from "./createTodoEntry";
import formDisplayToggle from "./formToggle";
import postTaskFunction from "./postTaskFunction";
import sortInboxStorage from "./sortInboxStorage";
import sortTodayStorage from "./sortTodayStorage";

export default function createTodoForm(title) {
    // Create a form that appears every time you click on Add Task
    // The form should have an input field of textarea with a character limit
    // of no more than 200 characters.
    // will include a "Add task" and Cancel buttons
    // Will have a class that helps us hide/show it.
    // Later on will include a due date



    const myStorage = localStorage;


    const formCalendar = createCalendar();
    let dueDate;

    const priorityDropdown = createPriorityDropdown();

    const taskBtnContainer = createDiv();
    taskBtnContainer.classList.add('task-btn-container');
    taskBtnContainer.appendChild(priorityDropdown);
    taskBtnContainer.appendChild(formCalendar.calendarDiv);

    const inputAreaContainer = createDiv();
    inputAreaContainer.classList.add('task-input-container')
    const taskList = document.querySelector('.task-list.inbox');
    const addTaskBtn = document.querySelector('.add-task-btn');

    const taskDescription = document.createElement('textarea');
    taskDescription.id = 'task-description';
    taskDescription.maxLength = 120;
    taskDescription.placeholder = 'Description';

    const formContainer = createDiv();
    formContainer.classList.add('form-container');
    const taskForm = document.createElement('form');
    taskForm.submit(false);
    taskForm.classList.add('taskform');

    // Create a container for the Post Task and Cancel buttons
    const formBtnContainer = createDiv();

    // Create a button that adds the task;
    const postTaskBtn = document.createElement('button');
    postTaskBtn.disabled = true;

    // Create a cancel button that hides the form again
    const cancelTaskBtn = document.createElement('button');

    // Append both buttons in the container
    appendMultiple(formBtnContainer, postTaskBtn, cancelTaskBtn);

    // Save the text area label and text area input in a variable.
    const textArea = document.createElement('textarea');
    textArea.id = 'textArea';
    textArea.placeholder = 'E.g., Family get together on Sunday..'
    // const textAreaLabel = document.createElement('label');


    // Set maximum number of characters inside of the text area
    textArea.maxLength = 240;



    // Add text for buttons:
    postTaskBtn.innerText = 'Post Task';
    cancelTaskBtn.innerText = 'Cancel';



    // Adding an event listener to textarea so you don't post empty tasks
    textArea.addEventListener('keyup', () => {

        if (textArea.value.length > 0) {
            postTaskBtn.disabled = false;
        } else {
            postTaskBtn.disabled = true;
        }
    })





    // Add an event listener to the 'Post Task' button to push the task into the dom;
    postTaskBtn.onclick = () => {
        let itemToStringify;
        let itemToParse;
        let unformattedDate;
        if (formCalendar.calendarInput.value === '') {
            dueDate = format(new Date(), 'dd/MM/yyyy HH:mm')

        } else {
            unformattedDate = formCalendar.calendarInput.value;
            let parsedDate = parseISO(unformattedDate);
            console.log(unformattedDate);
            dueDate = format(parsedDate, 'dd/MM/yyyy HH:mm')

        }

        const task = postTaskFunction(textArea, taskDescription, addTaskBtn, unformattedDate, dueDate);
        // We use the array provided. The array should already be up to date if there are any items from storage.

        // Find the title of the page (inbox, today, upcoming) and add the new task into the respective field

        let currTitle = title;

        itemToParse = JSON.parse(myStorage.Projects);
        itemToParse.find((element) => {
            if (element.name === currTitle) {
                element.tasks.push(task.todoElement.taskObject);
                itemToStringify = JSON.stringify(itemToParse);
                myStorage.Projects = itemToStringify;
            }
        })


    }



    // Add an event listener to the cancel button so when you press it, it re-adds the 'Add Task' btn and removes the Task Form
    cancelTaskBtn.onclick = () => {
        const currentForm = document.querySelector('.form-container');
        currentForm.parentElement.remove();
        addTaskBtn.style.display = 'block';
    }



    appendMultiple(inputAreaContainer,
        textArea,
        taskDescription,
        taskBtnContainer);

    appendMultiple(taskForm,
        inputAreaContainer,
        formBtnContainer);

    appendMultiple(formContainer,
        taskForm);




    return { formContainer, postTaskBtn, cancelTaskBtn };


}




