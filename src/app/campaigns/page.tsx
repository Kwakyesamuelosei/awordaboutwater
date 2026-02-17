import Navbar from "@/components/Navbar";
import CampaignsHero from "@/components/CampaignsHero";
import CampaignsContent from "@/components/CampaignsContent";
import Footer from "@/components/Footer";

export default function CampaignsPage() {
    return (
        <>
            <Navbar />
            <main>
                <CampaignsHero />
                <CampaignsContent />
            </main>
            <Footer />
        </>
    );
}
