interface Breadcrumb {
    page: string,
    path: string,
    alias: string, // name used to check equality in breadcrumbs array
}

// store/projectsStore.ts
export const useBreadcrumbStore = defineStore('breadcrumbs', () => {

    const breadcrumbs = reactive([] as Breadcrumb[]);
    const history = reactive([] as Breadcrumb[]);

    function init() {
        if (process.client) {
            const baseBreadcrumb = {page: "Home", path: "/", alias: "Home"};
            const storedBreadcrumbs = localStorage.getItem("breadcrumbs");
            const storedHistory = localStorage.getItem("history");

            const parsedBreadcrumbs = storedBreadcrumbs ? JSON.parse(storedBreadcrumbs) : [baseBreadcrumb];
            const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [baseBreadcrumb];

            const breadcrumbsOk = (parsedBreadcrumbs && (parsedBreadcrumbs.length > 0) && parsedBreadcrumbs.every((item: any) => item.name && item.path && item.alias));
            const historyOk = (parsedHistory && (parsedHistory.length > 0) && parsedHistory.every((item: any) => item.name && item.path && item.alias));

            const newBreadcrumbs = breadcrumbsOk ? parsedBreadcrumbs : [baseBreadcrumb];
            const newHistory = historyOk ? parsedHistory : [baseBreadcrumb];

            breadcrumbs.splice(0, breadcrumbs.length, ...newBreadcrumbs);
            history.splice(0, history.length, ...newHistory);
        }
    }

    function updateBreadcrumbs(page: string, path: string, alias?: string) {
        if (process.client) {
            if (!alias) alias = page;
            const breadcrumb = {page: page, path: path, alias: alias};
            if (history[history.length - 1] === breadcrumb) return; // ignore page reloads
            history.push(breadcrumb);
            const newLength = breadcrumbs.findIndex(b => b.alias === alias) + 1;
            if (newLength) {
                breadcrumbs.length = newLength;
                breadcrumbs[breadcrumbs.length - 1] = breadcrumb; // replace old page with the new one e.g. old project/1 with new project/2
            } else breadcrumbs.push(breadcrumb);

            localStorage.setItem("breadcrumbs", JSON.stringify(breadcrumbs));
            localStorage.setItem("history", JSON.stringify(history));
        }
    }

    init()

    return {breadcrumbs, history, updateBreadcrumbs};
});