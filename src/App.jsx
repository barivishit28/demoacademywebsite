import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Courses from "./components/sections/Courses";
import Faculty from "./components/sections/Faculty";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Courses />
        <Faculty />
        <WhyChooseUs />
        <Achievements />
        <Contact />
        <Footer />
      </main>
      
    </>
  );
}

export default App; 