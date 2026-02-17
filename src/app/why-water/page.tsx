import Navbar from "@/components/Navbar";
import WhyWaterHero from "@/components/WhyWaterHero";
import WhyWaterContent from "@/components/WhyWaterContent";
import Footer from "@/components/Footer";

export default function WhyWaterPage() {
    return (
        <>
            <Navbar />
            <main>
                <WhyWaterHero />
                <WhyWaterContent />
            </main>
            <Footer />
        </>
    );
}
