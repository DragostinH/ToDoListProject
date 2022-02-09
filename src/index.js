import { formatDistance, subDays } from 'date-fns';
import { tr } from 'date-fns/locale';

const indexPage = (() => {
    const sideBar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('toggle');

    toggleBtn.onclick = ()=>{
        sideBar.classList.toggle('hide-sidebar');
    }

})()