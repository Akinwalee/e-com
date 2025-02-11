import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = ({ style, imgSrc, search, cart, user, menuBar, closeBar }) => {
  const [toggle, setToggle] = useState(false); 
  const router = useRouter();

  console.log("closeBar:", search); // Debugging

  return (
    <nav className={`w-full border-b ${style ? style : "bg-white text-black"} border-neutral-800 p-2`}>
      <div className="w-full px-4 lg:p-0 lg:w-3/6 mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <Image 
            src={imgSrc ? imgSrc : "/images/GlobalTimesLogoDarkTransparent.svg"} 
            alt="Global Times Logo" 
            width={200} 
            height={50}
          />
        </Link>
        
        <div className={`absolute ${toggle ? "flex flex-col h-72 animate-menuBar top-20" : "hidden h-0 overflow-hidden"} w-full left-0 z-10 justify-center items-center ${style ? style : "bg-white text-black"} lg:w-3/6 lg:left-auto 2xl:static 2xl:flex 2xl:flex-row 2xl:space-x-6 2xl:w-auto 2xl:py-4 text-xs`}>
          {router.pathname !== '/' && <Link href="/" className='py-3'>Home</Link>}
          {router.pathname !== '/about' && <Link href="/about" className='py-3'>About</Link>}
          {router.pathname !== '/shop' && <Link href="/shop" className='py-3'>Shop</Link>}
          {router.pathname !== '/repair' && <Link href="/repair" className='py-3'>Repair</Link>}
          {router.pathname !== '/contact' && <Link href="/contact" className='py-3'>Contact</Link>}
          
          <div className='searchbar-container w-full px-5 py-3'>
            <div className='py-1 px-5 flex items-center rounded-full w-full border border-neutral-700 2xl:hidden'>
              <Link href="/">
                <Image 
                  src={search ? search : "/images/w-ic-search.svg"} 
                  alt="Search Icon" 
                  width={22} 
                  height={22} 
                />
              </Link>
              <input placeholder='Search...' className={`${style ? style : "bg-white text-black"} w-full p-2 border-none focus:border-none focus:outline-none text-md bg-black`} />
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/login" className='2xl:flex hidden'>
            <Image 
              src={search ? search : "/images/w-ic-search.svg"}
              alt="Search Icon" 
              width={22} 
              height={22} 
            />
          </Link>
         
          <Link href="/login">
            <Image 
              src={user ? user : "/images/w-ic-user.svg"}
              alt="User Icon" 
              width={22} 
              height={22} 
            />
          </Link>
          <div className='flex items-center sm:space-x-4'>
            <Link href="/cart">
              <Image 
                src={cart ? cart : "/images/w-ic-cart.svg"} 
                alt="Cart Icon" 
                width={22} 
                height={22} 
                className='sm:flex hidden'
              />
            </Link>
            <div className='text-xs flex space-x-1'>
              <p>Cart</p> 
              <p>(0)</p> 
            </div>
          </div>

          <div className='2xl:hidden flex'>
            <Image 
              src={toggle ? (closeBar ? closeBar : "/images/w-ic-close.svg") : (menuBar ? menuBar : "/images/w-menu-bar.svg")}  
              alt="Menu Icon" 
              width={24} 
              height={24} 
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
