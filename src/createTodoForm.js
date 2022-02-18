import addClassToElement from "./addClassToElement";
import appendMultiple from "./appendMultiple";
import createAddTaskBtn from "./createAddTaskBtn";
import createDiv from "./createDiv";
import createTodoEntry from "./createTodoEntry";
import formDisplayToggle from "./formToggle";

export default function createTodoForm() {
    // Create a form that appears every time you click on Add Task
    // The form should have an input field of textarea with a character limit
    // of no more than 200 characters.
    // will include a "Add task" and Cancel buttons
    // Will have a class that helps us hide/show it.
    // Later on will include a title, description, due date and priority
    const taskList = document.querySelector('.task-list.inbox');
    const addTaskBtn = document.querySelector('.add-task-btn');
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

    // Create a cancel button that hides the form again
    const cancelTaskBtn = document.createElement('button');

    // Append both buttons in the container
    appendMultiple(formBtnContainer, postTaskBtn, cancelTaskBtn);

    // Save the text area label and text area input in a variable.
    const textArea = document.createElement('textarea');
    const textAreaLabel = document.createElement('label');


    // Set maximum number of characters inside of the text area
    textArea.maxLength = 240;

    // Wrap the input(textarea) in a label
    textAreaLabel.appendChild(textArea);


    // Add text for buttons:
    postTaskBtn.innerText = 'Post Task';
    cancelTaskBtn.innerText = 'Cancel';





    // Add an event listener to the 'Post Task' button to push the task into the dom;
    postTaskBtn.onclick = () => {
        const currentForm = document.querySelector('.form-container');
        const todoElement = createTodoEntry(textArea.value).taskContainer;

        currentForm.parentElement.appendChild(todoElement);






        currentForm.parentElement.removeChild(currentForm);
        addTaskBtn.style.display = 'block';

    }



    // Add an event listener to the cancel button so when you press it, it re-adds the 'Add Task' btn and removes the Task Form
    cancelTaskBtn.onclick = () => {
        const currentForm = document.querySelector('.form-container');
        currentForm.parentElement.remove();
        addTaskBtn.style.display = 'block';

    }




    appendMultiple(taskForm, textAreaLabel, formBtnContainer);
    appendMultiple(formContainer, taskForm);




    return { formContainer, postTaskBtn, cancelTaskBtn };


}


