export default function formDisplayToggle(button, form){

    button.onclick = ()=>{
        form.classList.toggle('hidden');
    }

}