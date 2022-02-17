import addClassToElement from "./addClassToElement";
import appendMultiple from "./appendMultiple";
import createAddTaskBtn from "./createAddTaskBtn";
import createDiv from "./createDiv";
import formDisplayToggle from "./formToggle";

export default function createTodoForm() {
    // Create a form that appears every time you click on Add Task
    // The form should have an input field of textarea with a character limit
    // of no more than 200 characters.
    // will include a "Add task" and Cancel buttons
    // Will have a class that helps us hide/show it.
    // Later on will include a title, description, due date and priority
    const formContainer = createDiv();
    formContainer.classList.add('form-container');
    const taskForm = document.createElement('form');
    addClassToElement(taskForm, 'taskform', 'hidden');
    // Create a button that shows the form
    const addTaskBtn = createAddTaskBtn();


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

    addTaskBtn.innerText = 'Add Task';
    postTaskBtn.innerText = 'Post Task';
    cancelTaskBtn.innerText = 'Cancel';





    appendMultiple(taskForm, textAreaLabel, formBtnContainer);
    appendMultiple(formContainer, taskForm, addTaskBtn);




    return formContainer;


}


