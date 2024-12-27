import { Navigbar } from "@/components/ui/navbar";
import AdvisorsForm from "./advisors";
import { Footer } from "@/components/ui/footer";
import { AdvisorsProvider } from "./AdvisorsContext";

export default function Advisors()
{
    return <>
    <Navigbar/>
    <AdvisorsProvider>
    <AdvisorsForm/>
    </AdvisorsProvider>
    <Footer/>
    </>
}