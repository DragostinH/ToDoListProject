export default function createTaskDescription(description) {
    const taskDescription = document.createElement('p');
    taskDescription.innerText = description;
    taskDescription.classList.add('todo-description');
    return taskDescription;
}