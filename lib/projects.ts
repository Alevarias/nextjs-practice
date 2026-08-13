export interface ProjectMetaData {
    slug: string;
    title: string;
    description: string;
    completion: boolean;
}

export const PROJECT_LIBRARY: ProjectMetaData[] = [
    {
        slug: "mtg-proxy", 
        title: "MTG Proxy", 
        description: "Lets you generate proxy Magic The Gathering Cards", 
        completion: true
    }, 
    {
        slug: "posts", 
        title: "Posts", 
        description: "A practice page for dynamically creating cards and pages based on a retrieved API file. ", 
        completion: true
    }, 
    {
        slug: "calculator", 
        title: "Calculator", 
        description: "A calculator page that exercises button wiring and useState", 
        completion: false
    }, 
]





