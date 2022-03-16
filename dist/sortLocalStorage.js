import sortTodayStorage from "./sortTodayStorage"
import sortUpcomingStorage from "./sortUpcomingStorage";

export default function sortLocalStorage() {
    // Have a single sortStorage() function that has 3 functions for each section (inbox, today, upcoming).
    // 1. Today should look at inbox and just add the tasks that are for Today. Every time that you click on 'Today'.
    // 2. Upcoming should add every task that is +1 days from isToday.
    const sortTodayPage = sortTodayStorage();
    const sortUpcomingPage = sortUpcomingStorage();
    

    return { sortTodayPage, sortUpcomingPage }
}