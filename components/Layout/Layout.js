import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar style="bg-white text-black" imgSrc="/images/GlobalTimesLogoDarkTransparent.svg"/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;