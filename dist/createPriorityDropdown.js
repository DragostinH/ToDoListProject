import appendMultiple from "./appendMultiple";
import createDiv from "./createDiv";

export default function createPriorityDropdown() {
   

    const dropDownDiv = createDiv();
    dropDownDiv.classList.add('dropdown');

    const dropDownBtn = document.createElement('select');
    dropDownBtn.classList.add('dropdown-btn');
    dropDownBtn.innerText = 'PlaceholderText';

    const dropDownContent = createDiv();
    dropDownContent.classList.add('dropdown-content');

    const noOption = document.createElement('option');
    noOption.classList.add('dropdown-option');
    noOption.classList.add('none-option');
    noOption.innerText = 'Priority';
    noOption.selected = true;
    // noOption.disabled = true;

    const priorityA = document.createElement('option');
    priorityA.classList.add('dropdown-option');
    priorityA.classList.add('A');
    priorityA.innerText = 'A';
    const priorityB = document.createElement('option');
    priorityB.classList.add('dropdown-option');
    priorityB.classList.add('B');
    priorityB.innerText = 'B';
    const priorityC = document.createElement('option');
    priorityC.classList.add('dropdown-option');
    priorityC.classList.add('C');
    priorityC.innerText = 'C';
    const priorityD = document.createElement('option');
    priorityD.classList.add('dropdown-option');
    priorityD.classList.add('D');
    priorityD.innerText = 'D';
    

    appendMultiple(dropDownBtn,
        noOption,
        priorityA,
        priorityB,
        priorityC,
        priorityD);

    appendMultiple(dropDownDiv,
        dropDownBtn,
        dropDownContent);


    return dropDownDiv;
}