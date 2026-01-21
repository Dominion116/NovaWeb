import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
