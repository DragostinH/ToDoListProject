export default function createCheckmark() {
    const taskCheckbox = document.createElement('button');
    taskCheckbox.innerHTML = '&#10003;';
    taskCheckbox.classList.add('task-checkbox');
    return taskCheckbox;
}