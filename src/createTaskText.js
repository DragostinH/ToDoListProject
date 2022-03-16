export default function createTaskText(text){
    const taskText = document.createElement('span');
    taskText.maxLength = 120;
    taskText.innerText = text;

    return taskText;
}