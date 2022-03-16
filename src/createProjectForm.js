import appendMultiple from "./appendMultiple";
import createDiv from "./createDiv";

export default function createProjectForm() {

    const btnContainer = createDiv();
    btnContainer.classList.add('projectform-btn-container');


    const projectForm = document.createElement('form');
    projectForm.classList.add('project-form');

    const projectFormTitle = document.createElement('input');
    projectFormTitle.type = 'text';
    projectFormTitle.maxLength = 50;
    projectFormTitle.classList.add('project-form-title');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('add-project-btn');
    addProjectBtn.innerText = 'Add';
    addProjectBtn.type = 'button';
    addProjectBtn.disabled = true;

    const cancelProjectBtn = document.createElement('button');
    cancelProjectBtn.classList.add('cancel-project-btn');
    cancelProjectBtn.innerText = 'Cancel';
    cancelProjectBtn.type = 'button';


    projectFormTitle.addEventListener('keyup', () => {
        if (projectFormTitle.value.length > 0) {
            addProjectBtn.disabled = false;
        } else {
            addProjectBtn.disabled = true;
        }

        return projectFormTitle.value;
    })



    appendMultiple(btnContainer,
        addProjectBtn,
        cancelProjectBtn);


    appendMultiple(projectForm,
        projectFormTitle,
        btnContainer);


    return { projectForm, addProjectBtn, cancelProjectBtn, projectFormTitle };
}