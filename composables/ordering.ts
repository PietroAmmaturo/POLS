interface Activity {
    name: string
}
export const activityOrders = ["name(asc)", "name(desc)"]
export const orderActivities = (activities: Activity[], order: string) => {
    switch (order) {
        case activityOrders[0]:
            activities.sort((a, b) => (a.name > b.name) ? 1 : -1);
            break
        case activityOrders[1]:
            activities.sort((a, b) => (a.name < b.name) ? 1 : -1);
            break
        default:
    }
}