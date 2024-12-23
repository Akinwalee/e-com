import Layout from '../components/Layout/Layout';
import Hero from '../components/Layout/Hero';
import Featured from '../components/Layout/Featured';
import Services from '../components/Layout/Services';
import Latest from '../components/Layout/Latest';
import Banner from '../components/Layout/Banner';
import CtaSection from '../components/Layout/Cta';
import Brands from '../components/Layout/Brands';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar style="bg-black text-white" imgSrc="/images/GlobalTimesLogo.svg"/>
        <Hero />
        <Featured />
        <Services />
        <Latest />
        <Banner />
        <CtaSection />
        <Brands />
      <Footer />
    </>
  );
}