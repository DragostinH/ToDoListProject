import appendMultiple from "./appendMultiple";
import createCheckmark from "./createCheckmark";
import createDiv from "./createDiv";
import createPriorityDropdown from "./createPriorityDropdown";
import createTaskText from "./createTaskText";
import generateRandomNum from "./randomNumGenerator";
import createTaskDescription from "./taskDescription";

export default function createTodoEntry(text, description, id = 0) {
    const randomNum = generateRandomNum();

    const myStorage = localStorage;
    const taskParentContainer = createDiv();

    taskParentContainer.classList.add('task-container');
    if(id ===0){
        taskParentContainer.id = randomNum;

    }else{
        taskParentContainer.id = id;
    }

    const taskObject = {
        taskID: taskParentContainer.id,
        taskText: text,
        taskDescription: description,
        taskPriority: ""

    }




    const taskTextContainer = createDiv();

    const taskText = createTaskText(text);

    const taskDescription = createTaskDescription(description);

    const taskCheckmark = createCheckmark();

    // Adding an event listener to the checkbox button so it removes the to do entry by using the unique ID that gets generated with each todoEntry that we create
    taskCheckmark.onclick = () => {
        // let arr = JSON.parse(myStorage.Inbox).tasks;
        let keys = Object.keys(myStorage);
        for (const key of keys) {
           let currItem = JSON.parse(myStorage.getItem(key));
           currItem.tasks.forEach(element => {
               if(element.taskID === taskParentContainer.id){
                   let indexToDelete = currItem.tasks.indexOf(element);
                //    console.log(indexToDelete);
                   console.log(element);
                //    console.log(currItem.tasks);
                   currItem.tasks.splice(indexToDelete, 1);
               }
           });
        }

        const ulElement = document.querySelector('.task-list.inbox');
        const todoEntryToRemove = document.getElementById(taskParentContainer.id);
        ulElement.removeChild(todoEntryToRemove.parentElement)
        // arr.forEach(element => {
        //     if(element.taskID === randomNum){

        //     }
        // });
    }

    appendMultiple(taskTextContainer,
        taskText,
        taskDescription);

    appendMultiple(taskParentContainer,
        taskCheckmark,
        taskTextContainer);



    return {
        taskParentContainer,
        taskTextContainer,
        taskObject
    }

}


