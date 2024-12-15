import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold mb-4">PAGES</h4>
            <nav className="space-y-2">
              <Link href="/about-us" className="block hover:text-gray-400">About Us</Link>
              <Link href="/shop" className="block hover:text-gray-400">Shop</Link>
              <Link href="/categories" className="block hover:text-gray-400">Categories</Link>
              <Link href="/blogs" className="block hover:text-gray-400">Blogs</Link>
              <Link href="/reviews" className="block hover:text-gray-400">Reviews</Link>
              <Link href="/faq" className="block hover:text-gray-400">FAQ</Link>
              <Link href="/contact-us" className="block hover:text-gray-400">Contact Us</Link>
            </nav>
          </div>
        
          <div>
            <h4 className="font-bold mb-4">CATEGORIES</h4>
            <nav className="space-y-2">
              <Link href="/about-us" className="block hover:text-gray-400">About Us</Link>
              <Link href="/shop" className="block hover:text-gray-400">Shop</Link>
              <Link href="/categories" className="block hover:text-gray-400">Categories</Link>
              <Link href="/blogs" className="block hover:text-gray-400">Blogs</Link>
            </nav>
          </div>


          <div>
            <h4 className="font-bold mb-4">RESOURCES</h4>
            <nav className="space-y-2">
              <Link href="/about-us" className="block hover:text-gray-400">Return Policy</Link>
              <Link href="/shop" className="block hover:text-gray-400">Terms and Condition</Link>
            </nav>
          </div>
        </div>
          
          <div className="footer-wrap bg-black-800 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="footer-btm flex justify-between items-center border-t border-gray-700 pt-6">
              <div>© 2025 &nbsp;Global Times</div>
              <div className="ft-social flex space-x-4">
                <a href="https://twitter.com/" target="_blank" className="social-link w-inline-block">
                  <Image src="/images/ic-twitter.svg" alt="Twitter" width={24} height={24} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" className="social-link w-inline-block">
                  <Image src="/images/ic-facebook.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="https://www.youtube.com/" target="_blank" className="social-link w-inline-block">
                  <Image src="/images/ic-youtube.svg" alt="YouTube" width={24} height={24} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="social-link w-inline-block">
                  <Image src="/images/ic-insta.svg" alt="Instagram" width={24} height={24} />
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
