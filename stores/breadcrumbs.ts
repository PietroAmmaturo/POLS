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
        const baseBreadcrumb = {page: "Home", path: "/", alias: "Home"};

        breadcrumbs.splice(0, breadcrumbs.length, ...[baseBreadcrumb]);
        history.splice(0, history.length, ...[baseBreadcrumb]);
    }

    function updateBreadcrumbs(page: string, path: string, alias?: string) {
        if (!alias) alias = page;
        const breadcrumb = {page: page, path: path, alias: alias};
        if (history[history.length - 1].path === breadcrumb.path) history.pop(); // ignore page reloads
        history.push(breadcrumb);
        const newLength = breadcrumbs.findIndex(b => b.alias === alias) + 1;
        if (newLength) {
            breadcrumbs.length = newLength;
            breadcrumbs.pop(); // replace old page with the new one e.g. old project/1 with new project/2
        }
        breadcrumbs.push(breadcrumb);

    }

    init()

    return {breadcrumbs, history, updateBreadcrumbs};
});