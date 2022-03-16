export default function checkIfProjectExists(name) {
    const myStorageArr = JSON.parse(localStorage.Projects);
    const projectNameToCheck = name.trim().toLowerCase();
    let exists = false;

    myStorageArr.forEach((e) => {
        e.name === projectNameToCheck ? 
        exists = true:
        exists = false;
    });

    return exists;
}