export interface Activity {
    name: string,
    tags: string[],
    picture: string,
    id: number,
    type: string
}
export const activityOrders = ["Name (Asc)", "Name(Desc)"];
export const orderActivities = (activities: Activity[], order: string) => {
    switch (order) {
        case activityOrders[0]:
            return activities.sort((a, b) => (a.name > b.name) ? 1 : -1);
        case activityOrders[1]:
            return activities.sort((a, b) => (a.name < b.name) ? 1 : -1);
        default:
            return activities;
    }
}

export const filterActivities = (activities: Activity[], filter: string) => activities.filter(activity => activity.tags.includes(filter));