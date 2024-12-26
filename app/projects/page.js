import { Navigbar } from "@/components/ui/navbar"
import ProjectsPage from "./projects"
import { Footer } from "@/components/ui/footer"

export default function Project()
{
    return <>
    <Navigbar/>
    <div className="lg:p-10">
    <ProjectsPage/>
    </div>
    <Footer/>
    </>
}