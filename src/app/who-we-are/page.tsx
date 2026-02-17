import Navbar from "@/components/Navbar";
import WhoWeAreHero from "@/components/WhoWeAreHero";
import WhoWeAre from "@/components/WhoWeAre";
import Footer from "@/components/Footer";

export default function WhoWeArePage() {
    return (
        <>
            <Navbar />
            <main>
                <WhoWeAreHero />
                <WhoWeAre />
            </main>
            <Footer />
        </>
    );
}
