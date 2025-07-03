
import Layout from "../layouts/Layout";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Classes from "../components/Classes";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Home = () => (
  <Layout>
    <HeroSection />
    <About />
    <Classes />
    <Gallery />
    <Contact />
  </Layout>
);

export default Home;
