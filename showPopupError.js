import appendMultiple from "./appendMultiple";
import createDiv from "./createDiv";

export default function showErrorPopup(projectTitle) {

    const main = document.querySelector('main');
    const body = document.body;


    const fullScreen = createDiv();
    fullScreen.id = 'boxBack';
    fullScreen.classList.add('show');

    const dialogBox = createDiv();
    dialogBox.id = 'boxWrap';

    const boxText = createDiv();
    boxText.id = 'boxTxt'
    boxText.innerText = `You can't create a project called "${projectTitle}" since it already exists`;

    const errorOkBtn = document.createElement('input');
    errorOkBtn.type = 'button';
    errorOkBtn.value = 'OK';
    errorOkBtn.id = 'ok-btn';

    errorOkBtn.onclick = () => {
        body.removeChild(fullScreen);
    }



    // Appends -------
    fullScreen.appendChild(dialogBox);
    appendMultiple(dialogBox,
        boxText,
        errorOkBtn);
    body.appendChild(fullScreen);
    // main.appendChild(fullScreen);

}