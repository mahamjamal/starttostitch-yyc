
import Layout from "../layouts/Layout";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Classes from "../components/Classes";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Deals from "../components/Deals";

const Home = () => (
  <Layout>
    <HeroSection />
    <Deals />
    <About />

    <Classes />
    
    <Gallery />
    <Contact />
  </Layout>
);

export default Home;
