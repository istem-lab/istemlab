import { Navigbar } from "@/components/ui/navbar";
import JobApplicationForm from "./JobApplicationForm";
import { Footer } from "@/components/ui/footer";
import { JobApplicationProvider } from "./JobApplicationContext";

export default function Apply(){
    return <>
    <Navigbar/>
    <JobApplicationProvider>
    <JobApplicationForm/>
    </JobApplicationProvider>
    <Footer/>
    </>
}