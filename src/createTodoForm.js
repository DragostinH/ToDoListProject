import addClassToElement from "./addClassToElement";
import appendMultiple from "./appendMultiple";
import createAddTaskBtn from "./createAddTaskBtn";
import createDiv from "./createDiv";
import createPriorityDropdown from "./createPriorityDropdown";
import createTodoEntry from "./createTodoEntry";
import formDisplayToggle from "./formToggle";
import postTaskFunction from "./postTaskFunction";

export default function createTodoForm(array) {
    // Create a form that appears every time you click on Add Task
    // The form should have an input field of textarea with a character limit
    // of no more than 200 characters.
    // will include a "Add task" and Cancel buttons
    // Will have a class that helps us hide/show it.
    // Later on will include a due date
    const myStorage = localStorage;
    const priorityDropdown = createPriorityDropdown();

    const taskBtnContainer = createDiv();
    taskBtnContainer.classList.add('task-btn-container');
    taskBtnContainer.appendChild(priorityDropdown);

    const inputAreaContainer = createDiv();
    inputAreaContainer.classList.add('task-input-container')
    const taskList = document.querySelector('.task-list.inbox');
    const addTaskBtn = document.querySelector('.add-task-btn');

    const taskDescription = document.createElement('textarea');
    taskDescription.id = 'task-description';
    taskDescription.maxLength = 120;
    taskDescription.placeholder = 'Description';

    let listArray;
    const formContainer = createDiv();
    formContainer.classList.add('form-container');
    const taskForm = document.createElement('form');
    addClassToElement(taskForm, 'taskform');
    // Create a button that shows the form


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



    // Adding an event listener to keyUp so you don't post empty tasks
    textArea.addEventListener('keyup', () => {

        if (textArea.value.length > 0) {
            postTaskBtn.disabled = false;
        } else {
            postTaskBtn.disabled = true;
        }
    })





    // Add an event listener to the 'Post Task' button to push the task into the dom;
    postTaskBtn.onclick = () => {
        const task = postTaskFunction(textArea, taskDescription, addTaskBtn);
        console.log(task.todoElement);

        myStorage.submittedTask = JSON.stringify(task.todoElement);

        // sometime later
        // let user = JSON.parse(localStorage.user);
        // alert(user.name); // John
        console.log(myStorage.submittedTask);

        let todo = JSON.parse(myStorage.submittedTask);
        console.log(todo);
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




