import { isFuture, isToday, isTomorrow, parse, parseISO } from "date-fns";

export default function sortUpcoming() {

    const myStorage = window.localStorage;

    const myStorageArr = JSON.parse(myStorage.Projects);

    let inboxArr = myStorageArr[0].tasks;
    let upcomingArr = [];
    myStorageArr[2].tasks = [];

    inboxArr.forEach((e) => {
        let dueDate = e.taskDueDate;
        let parsedDueDate = parseISO(parse(dueDate, 'dd/MM/yyyy HH:mm', new Date()).toISOString());

        if (isFuture(parsedDueDate)) {
            upcomingArr.push(e);
        }


    });


    myStorageArr[2].tasks = upcomingArr;
    myStorage.Projects = JSON.stringify(myStorageArr);



}