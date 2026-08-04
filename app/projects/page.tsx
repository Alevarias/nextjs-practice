import ProjectCard from "@/components/project-cards";

export default async function ProjectsPage() {
    return (
        <div className="flex flex-row align-start justify-start gap-4 p-1 min-h-fit">
            <div className="flex flex-col space-y-4 p-4 bg-transparent rounded-lg shadow-md min-h-400">
                <div className="min-h-full min-w-50">
                    <span className="font-bold text-2xl">Search</span>
                </div>
                
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4">
                <ProjectCard title="Project 1" description="This is the description for Project 1." />

            </div>
        </div>

        
    )
}