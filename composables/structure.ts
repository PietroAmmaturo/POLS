interface Section {
    title: string,
    id: string
}

interface Structure{
    name: string,
    sections: Section[]
}

const GlobalStructures : Structure[] = [
    {
        name: "about",
        sections: [
            {
                title: "Mission",
                id: "#mission"
            },
            {
                title: "History",
                id: "#history"
            },
            {
                title: "Practical information",
                id: "#practical"
            }
        ]
    },
    {
        name: "activities",
        sections: [
            {
                title: "Projects",
                id: "#projects"
            },
            {
                title: "Services",
                id: "#services"
            }
        ]
    },
    /*{
        name: "project",
        sections: [
            {
                title: "Description",
                id: "#description"
            },
            {
                title: "Responsible",
                id: "#responsible"
            }
        ]
    },*/
    {
        name: "service",
        sections: [
            {
                title: "Description",
                id: "#description"
            },
            {
                title: "Practical info",
                id: "#practical"
            },
            {
                title: "Responsible",
                id: "#responsible"
            },
            {
                title: "Testimonials",
                id: "#testimonials"
            }
        ]
    },
    {
        name: "contact",
        sections: [
            {
                title: "Contact details",
                id: "#details"
            },
            {
                title: "Send email",
                id: "#email"
            },
            {
                title: "Where are we?",
                id: "#where"
            }
        ]
    }
]

export function getSections (page: string){
    let localStructures = GlobalStructures.find(structure => structure.name === page);
    if (localStructures)
        return localStructures.sections;
}