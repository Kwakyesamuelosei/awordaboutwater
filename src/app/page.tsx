import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyWater from "@/components/WhyWater";
import FocusAreas from "@/components/FocusAreas";
import InsightsPreview from "@/components/InsightsPreview";
import TakeAction from "@/components/TakeAction";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                {/* Block 1: Hero */}
                <Hero />

                {/* Block 2: Why Water Matters */}
                <WhyWater />

                {/* Block 3: Focus Areas Grid */}
                <FocusAreas />

                {/* Block 4: Featured Insights */}
                <InsightsPreview />

                {/* Block 5: Take Action */}
                <TakeAction />
            </main>
            <Footer />
        </>
    );
}
