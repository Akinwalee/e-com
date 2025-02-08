import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar 
        style="bg-white text-black" 
        imgSrc="/images/GlobalTimesLogoDarkTransparent.svg"
        search="/images/ic-search.svg"
        cart="/images/ic-cart.svg"
        user="/images/ic-user.svg"
        menuBar="/images/menu-bar.svg"
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;