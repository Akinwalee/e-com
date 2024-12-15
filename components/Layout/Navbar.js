import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full bg-black shadow-md text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <Image 
            src="/images/GlobalTimesLogo.svg" 
            alt="Global Times Logo" 
            width={200} 
            height={50} 
          />
        </Link>
        
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/shop" className="hover:text-blue-600">Shop</Link>
          <Link href="/repair" className="hover:text-blue-600">Repair</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/log-in">
            <Image 
              src="/images/ic-user.svg" 
              alt="User Icon" 
              width={24} 
              height={24} 
            />
            User
          </Link>
          <Link href="/cart">
            <Image 
              src="/images/icon-cart.svg" 
              alt="Cart Icon" 
              width={24} 
              height={24} 
            />
            Cart (0)
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;