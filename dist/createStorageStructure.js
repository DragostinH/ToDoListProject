export default function createStorageStructure() {
    let itemToStringify;
    let myStorage = localStorage;
    let projectsArr = [
        {
            name: 'Inbox',
            tasks: []
        },
        {
            name: 'Today',
            tasks: []
        },
        {
            name: 'Upcoming',
            tasks: []
        }
    ]

    itemToStringify = JSON.stringify(projectsArr);
    myStorage.Projects = itemToStringify;

    return myStorage;
}