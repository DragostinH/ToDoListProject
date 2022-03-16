import { format, parseISO } from "date-fns";
import createDiv from "./createDiv";

export default function createCalendar() {
    let dueDate = format(new Date(), 'dd/MM/yyyy HH:mm');
    let parsedDate;

    const calendarDiv = createDiv();
    calendarDiv.classList.add('form-calendar');


    const calendarForm = document.createElement('form');
    calendarForm.submit(false);
    const calendarLabel = document.createElement('label');
    calendarLabel.innerText = 'Due Date';
    const calendarInput = document.createElement('input');
    calendarInput.type = 'datetime-local';
    calendarInput.id = 'dueDate';
    calendarInput.name = 'dueDate'





    // Event listener to the input 
    // calendarInput.onchange = () => {
    //     parsedDate = parseISO(calendarInput.value);
    //     dueDate = format(parsedDate, 'dd/MM/yyyy HH:mm')
    //     console.log(parsedDate);
    //     console.log(dueDate);
    // };


    // APPENDS -----------------------------

    calendarLabel.appendChild(calendarInput);
    calendarForm.appendChild(calendarLabel);
    calendarDiv.appendChild(calendarForm);

    return { calendarDiv, calendarInput };
}