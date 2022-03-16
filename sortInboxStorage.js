export default function sortInboxStorage(){
    const myStorage = window.localStorage;

    const myStorageArr = JSON.parse(myStorage.Projects);
    let inboxArr = [];
    let todayArr = [];
    let upcomingArr = [];

    inboxArr = myStorageArr[0].tasks;
    todayArr = myStorageArr[1].tasks;
    upcomingArr = myStorageArr[2].tasks;

    if(todayArr.length > inboxArr.length){
        
    }
}