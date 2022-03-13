export default function sortLocalStorage() {
    // 1. Get the tasks for each category
    // 2. Inbox will contain all tasks
    // 3. Today will contain tasks for today
    // 4. Upcoming will today anything that isn't for today.

    const myStorageArr = JSON.parse(localStorage);
    const inboxArr = [];
    const todayArr = [];
    const upcomingArr = [];

    

}