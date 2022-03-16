export default function createTaskDescription(description) {
    const taskDescription = document.createElement('p');
    taskDescription.maxLength = 120;
    taskDescription.innerText = description;
    taskDescription.classList.add('todo-description');
    return taskDescription;
}