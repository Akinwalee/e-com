import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="w-3/6 mx-auto">
        <div className="flex space-x-28">
          <div>
            <h4 className=" mb-8">PAGES</h4>
            <nav className="text-neutral-400 text-xs space-y-2">
              <Link href="/about-us" className="block hover:text-white duration-300 ">About Us</Link>
              <Link href="/shop" className="block hover:text-white duration-300 ">Shop</Link>
              <Link href="/categories" className="block hover:text-white duration-300 ">Categories</Link>
              <Link href="/blogs" className="block hover:text-white duration-300 ">Blogs</Link>
              <Link href="/reviews" className="block hover:text-white duration-300 ">Reviews</Link>
              <Link href="/faq" className="block hover:text-white duration-300 ">FAQ</Link>
              <Link href="/contact-us" className="block hover:text-white duration-300 ">Contact Us</Link>
            </nav>
          </div>
        
          <div>
            <h4 className=" mb-8">CATEGORIES</h4>
            <nav className="text-neutral-400 text-xs space-y-2">
              <Link href="/about-us" className="block hover:text-white duration-300 ">About Us</Link>
              <Link href="/shop" className="block hover:text-white duration-300 ">Shop</Link>
              <Link href="/categories" className="block hover:text-white duration-300">Categories</Link>
              <Link href="/blogs" className="block hover:text-white duration-300 ">Blogs</Link>
            </nav>
          </div>


          <div>
            <h4 className=" mb-8">RESOURCES</h4>
            <nav className="text-neutral-400 text-xs space-y-2">
              <Link href="/about-us" className="block hover:text-white duration-300 ">Return Policy</Link>
              <Link href="/shop" className="block hover:text-white duration-300 ">Terms and Condition</Link>
            </nav>
          </div>
        </div>
          
          <div className="footer-wrap bg-black-800 text-white pt-8">
          <div className="mx-auto">
            <div className="footer-btm flex justify-between items-center border-t border-gray-700 pt-8">
              <div className='text-xs text-neutral-400'>© 2025 &nbsp;Global Times</div>
              <div className="ft-social flex items-center space-x-8">
                <a href="https://twitter.com/" target="_blank" className="social-link w-inline-block">
                  <Image src="/images/ic-twitter.svg" alt="Twitter" width={14} height={14} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" className="social-link w-inline-block">
                  <Image src="/images/ic-facebook.svg" alt="Facebook" width={14} height={14} />
                </a>
                <a href="https://www.youtube.com/" target="_blank" className="social-link w-inline-block">
                  <Image src="/images/ic-youtube.svg" alt="YouTube" width={14} height={14} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="social-link w-inline-block">
                  <Image src="/images/ic-insta.svg" alt="Instagram" width={14} height={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
