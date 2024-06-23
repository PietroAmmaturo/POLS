interface Page {
    page: string,
    path: string,
    children: Page[],
}

const pageTree : Page = {
    page: "Home",
    path: "/",
    children: [
        {
            page: "All activities",
            path: "/activities",
            children: [
                {
                    page: "All projects",
                    path: "/projects",
                    children: [
                        {
                            page: "Project",
                            path: "",
                            children: []
                        }
                    ]
                },
                {
                    page: "All services",
                    path: "/services",
                    children: [
                        {
                            page: "Service",
                            path: "",
                            children: []
                        }
                    ]
                },
            ]
        },
        {
            page: "All people",
            path: "/people",
            children: [
                {
                    page: "Person",
                    path: "",
                    children: []
                }
            ]
        },
    ]
}

export function getPages(page: string) {
    return findPath(pageTree, page);
}
function findPath(pageTree: Page, targetPage: string) : Page[] {
    if (pageTree.page === targetPage) {
        return [pageTree];
    }

    for (const child of pageTree.children) {
        const foundChild = findPath(child, targetPage);
        if (foundChild.length) {
            return [pageTree, ...foundChild];
        }
    }

    return [];
}

