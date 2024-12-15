import Layout from '../components/Layout/Layout';
import Hero from '../components/Layout/Hero';
import Featured from '../components/Layout/Featured';
import Services from '../components/Layout/Services';
import Latest from '../components/Layout/Latest';
import Banner from '../components/Layout/Banner';
import CtaSection from '../components/Layout/Cta';
import Brands from '../components/Layout/Brands';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Featured />
      <Services />
      <Latest />
      <Banner />
      <CtaSection />
      <Brands />
    </Layout>
  );
}