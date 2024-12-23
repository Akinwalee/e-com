import Link from 'next/link';
import Image from 'next/image';

const Navbar = (props) => {
  return (
    <nav className={`w-full border-b ${props.style} border-neutral-800 p-2`}>
      <div className="w-3/6 mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <Image 
            src={`${props.imgSrc}`} 
            alt="Global Times Logo" 
            width={200} 
            height={50}
          />
        </Link>
        
        <div className="flex space-x-6 text-xs">
          <Link href="/index" >Home</Link>
          <Link href="/about" >About</Link>
          <Link href="/shop" >Shop</Link>
          <Link href="/repair" >Repair</Link>
          <Link href="/contact" >Contact</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/log-in">
            <Image 
              src="/images/w-ic-search.svg" 
              alt="Search Icon" 
              width={22} 
              height={22} 
            />
          </Link>
          <Link href="/log-in">
            <Image 
              src="/images/w-ic-user.svg" 
              alt="User Icon" 
              width={22} 
              height={22} 
            />
          </Link>
          <div className='flex items-center space-x-3'>
            <Link href="/cart">
              <Image 
                src="/images/icon-cart.svg" 
                alt="Cart Icon" 
                width={22} 
                height={22} 
              />
            </Link>
            <div className='text-xs'>
                Cart (0)
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;