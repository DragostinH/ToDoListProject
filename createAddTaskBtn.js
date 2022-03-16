export default function createAddTaskBtn() {
    const btn = document.createElement('button');
    btn.innerText = 'Add Task';
    btn.classList.add('add-task-btn');


    return btn;
}