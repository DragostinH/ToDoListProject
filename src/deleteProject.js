import { takeRight } from "lodash";
import sortSideBarStorage from "./sortSideBarStorage";

export default function deleteProject(projectName) {
    const myStorage = window.localStorage;
    const myStorageArr = JSON.parse(myStorage.Projects);
    const storageKeys = Object.keys(myStorage);

    let customProjectsArr = takeRight(myStorageArr, myStorageArr.length - 3);

    myStorageArr.forEach((el) => {
        let indexToDelete;
        console.log(el);
        if(el.name === projectName){
            indexToDelete = myStorageArr.indexOf(el);
            myStorageArr.splice(indexToDelete, 1);
        }
    })

    myStorage.Projects = JSON.stringify(myStorageArr);
    sortSideBarStorage();

}