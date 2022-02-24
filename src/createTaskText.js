export default function createTaskText(text){
    const taskText = document.createElement('span');
    taskText.innerText = text;

    return taskText;
}