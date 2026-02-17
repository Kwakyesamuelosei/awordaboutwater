import Navbar from "@/components/Navbar";
import WhereWeFocusHero from "@/components/WhereWeFocusHero";
import WhereWeFocusContent from "@/components/WhereWeFocusContent";
import Footer from "@/components/Footer";

export default function WhereWeFocusPage() {
    return (
        <>
            <Navbar />
            <main>
                <WhereWeFocusHero />
                <WhereWeFocusContent />
            </main>
            <Footer />
        </>
    );
}
