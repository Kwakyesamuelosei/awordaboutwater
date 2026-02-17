import Navbar from "@/components/Navbar";
import TakeActionHero from "@/components/TakeActionHero";
import TakeActionContent from "@/components/TakeActionContent";
import Footer from "@/components/Footer";

export default function TakeActionPage() {
    return (
        <>
            <Navbar />
            <main>
                <TakeActionHero />
                <TakeActionContent />
            </main>
            <Footer />
        </>
    );
}
