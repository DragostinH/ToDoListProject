import createTodoEntry from "./createTodoEntry";

export default function createStoredElements(array) {
    const sectionName = array[0].name;
    const tasksArray = array[0].tasks;
    const tasksElementsArray = [];

    tasksArray.forEach(element => {
        const task = createTodoEntry(element.taskText, element.taskDescription, element.taskID);
        console.log(element.taskID);
        let classType = element.taskPriority;
        task.taskParentContainer.classList.add(classType);
        tasksElementsArray.push(task.taskParentContainer);

    });

    return tasksElementsArray;
}