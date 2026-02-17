import Navbar from "@/components/Navbar";
import InsightsHero from "@/components/InsightsHero";
import InsightsContent from "@/components/InsightsContent";
import Footer from "@/components/Footer";

export default function InsightsPage() {
    return (
        <>
            <Navbar />
            <main>
                <InsightsHero />
                <InsightsContent />
            </main>
            <Footer />
        </>
    );
}
