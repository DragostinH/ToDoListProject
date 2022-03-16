import checkIfProjectExists from "./checkIfProjectExists";
import createDiv from "./createDiv";
import createListElement from "./createListElement";
import createProjectForm from "./createProjectForm";
import showErrorPopup from "./showPopupError";
import sortSideBarStorage from "./sortSideBarStorage";

export default function createSideBarProjectButtons() {
    // Create project form with text area and 2 buttons 'Add' 'Cancel'

    // 1. Create sidebar project. 
    // 2. This gets added to local storage as a separate element with name: and tasks array
    // 3. We create the button that has the project name as text
    // 4. Create a project factory 
    // 4. 

    const projectContainer = document.querySelector('.projects-container');
    const ulForPRojects = document.querySelector('.ul-projects')
    const plusProjects = document.querySelector('.projects-btn')

    const li = document.createElement('li');
    li.classList.add('project-list-entry');
    const projectFormObject = createProjectForm();


    projectFormObject.addProjectBtn.onclick = () => {
        let myStorageArr = JSON.parse(localStorage.Projects);
        let projectTitle = projectFormObject.projectFormTitle.value;
        let projectObject = {
            name: projectTitle,
            tasks: []
        };

        if(!checkIfProjectExists(projectTitle)){
            myStorageArr.push(projectObject);
    
            window.localStorage.Projects = JSON.stringify(myStorageArr);
            plusProjects.disabled = false;
    
            ulForPRojects.removeChild(li);
    
            sortSideBarStorage();

        }else{
            showErrorPopup(projectTitle);
        }

    }

    projectFormObject.cancelProjectBtn.onclick = () => {
        plusProjects.disabled = false;
        ulForPRojects.removeChild(li);
    }













    // Appends ----------------
    li.appendChild(projectFormObject.projectForm);
    ulForPRojects.appendChild(li);
    projectContainer.appendChild(ulForPRojects);

}