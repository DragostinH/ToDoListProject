export default function addClassToElement(element, ...classNames) {
    if (Array.isArray(classNames)) {
        const arrayOfNames = classNames;
        classNames.forEach(className => {
            element.classList.add(className);
        })

    } else {

        element.classList.add(classNames);
    }

}