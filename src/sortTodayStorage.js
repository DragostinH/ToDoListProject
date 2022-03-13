import { isToday, parse, parseISO } from "date-fns";

export default function sortTodayStorage() {
    // 1. Get the tasks for each category
    // 2. Inbox will contain all tasks
    // 3. Today will contain tasks for today
    // 4. Upcoming will today anything that isn't for today.

    const myStorage = window.localStorage;

    const myStorageArr = JSON.parse(myStorage.Projects);
    let inboxArr = [];
    let todayArr = [];
    let upcomingArr = [];

    inboxArr = myStorageArr[0].tasks;
    todayArr = myStorageArr[1].tasks;
    upcomingArr = myStorageArr[2].tasks;

    // If task is today and it isn't already in 'Today' push it.

    inboxArr.forEach((task) => {
        let currTaskID = task.taskID;
        let dueDate = task.taskDueDate;
        let isAdded = false;
        let parsedDueDate = parseISO(parse(dueDate, 'dd/MM/yyyy HH:mm', new Date()).toISOString());

        // If the tasks date is todays date proceed
        if (isToday(parsedDueDate)) {
            // Find out if it's already been added to the Today array
            todayArr.forEach((e)=>{
                e.taskID === currTaskID ? isAdded = true : isAdded;
            })

            // if it has been print that it's been added
            // if not add it to the array;
            if(isAdded){
                console.log('Items already added');
            }else{
                todayArr.push(task);
            }
        }

    })
 
    // Update the local storage to the new values
    myStorageArr[1].tasks = todayArr;
    myStorage.Projects = JSON.stringify(myStorageArr);

    return {todayArr, inboxArr}

}