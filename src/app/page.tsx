import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import WhatWeDo from "@/components/WhatWeDo";
import Stories from "@/components/Stories";
import Mission from "@/components/Mission";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <ImpactStats />
                <Mission />
                <WhatWeDo />
                <Achievements />
                <Stories />
            </main>
            <Footer />
        </>
    );
}
