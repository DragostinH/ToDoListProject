import { first, takeRight } from "lodash";
import appendMultiple from "./appendMultiple";
import createDiv from "./createDiv";
import deleteProject from "./deleteProject";
import openProject from "./openProject";

export default function sortSideBarStorage() {
    let storage = JSON.parse(localStorage.Projects);
    let length = storage.length;
    let ulProjects = document.querySelector('.ul-projects')
    let customProjectsArr = [];
    const main = document.querySelector('main');
    const ulMain = document.querySelector('.task-list');


    while (ulProjects.hasChildNodes()) {
        ulProjects.removeChild(ulProjects.firstChild);
    }


    customProjectsArr = takeRight(storage, length - 3);

    customProjectsArr.forEach((e) => {

        let btnContainer = createDiv();

        let deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.innerText = 'X';

        let projectBtn = document.createElement('button');
        projectBtn.innerText = e.name;

        let projectLiElement = document.createElement('li');



        // Event listeners --------
        projectBtn.onclick = () => {
            while(main.hasChildNodes()){
                main.removeChild(main.firstChild);
            }
            openProject(e.name);

        }

        deleteProjectBtn.onclick = () => {
            deleteProject(e.name);
        }




        // Appends ---------------

        appendMultiple(btnContainer,
            projectBtn,
            deleteProjectBtn)

        projectLiElement.appendChild(btnContainer);

        ulProjects.appendChild(projectLiElement);
    })


}