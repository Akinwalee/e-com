import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = (props) => {

  const [toggle, SetToggle] = useState(false);
  console.log("This is the image", props.search)
  
  return (
    <nav className={`w-full border-b ${props.style ? props.style : "bg-white text-black"} border-neutral-800 p-2`}>
      <div className="w-full px-4 lg:p-0 lg:w-3/6 mx-auto flex justify-between items-center py-4">
        <Link href="/">
            <Image 
              src={`${props.imgSrc ? props.imgSrc : "/images/GlobalTimesLogoDarkTransparent.svg"}`} 
              alt="Global Times Logo" 
              width={200} 
              height={50}
            />
        </Link>
        
        <div className={`absolute ${toggle ? "flex flex-col h-72 animate-menuBar  top-20" : "hidden h-0 overflow-hidden"} w-full left-0 z-10  justify-center items-center ${props.style ? props.style : "bg-white text-black"} lg:w-3/6 lg:left-auto 2xl:static 2xl:flex 2xl:flex-row 2xl:space-x-6 2xl:w-auto 2xl:py-4 text-xs`}>
          <Link href="/"className='py-3' >Home</Link>
          <Link href="/about" className='py-3'>About</Link>
          <Link href="/shop" className='py-3'>Shop</Link>
          <Link href="/repair" className='py-3'>Repair</Link>
          <Link href="/contact" className='py-3'>Contact</Link>

          
          <div className='searchbar-container w-full px-5 py-3'>
            <div className='py-1 px-5 flex items-center rounded-full w-full border border-neutral-700 2xl:hidden'>
              <Link href="/">
                <Image 
                  src={`${props.search ? props.search : "/images/w-ic-search.svg"}`} 
                  alt="Search Icon" 
                  width={22} 
                  height={22} 
                />
              </Link>
  
              <input placeholder='Search...' className={`${props.style ? props.style : "bg-white text-black"} w-full p-2 border-none focus:border-none focus:outline-none text-md bg-black`}></input>
            
            </div>
          </div>
          
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/login" className='2xl:flex hidden'>
              <Image 
                src={`${props.search ? props.search : "/images/w-ic-search.svg"}`}
                alt="Search Icon" 
                width={22} 
                height={22} 
              />
            </Link>
         
          <Link href="/login">
            <Image 
              src={`${props.user ? props.user : "/images/w-ic-user.svg"}`}
              alt="User Icon" 
              width={22} 
              height={22} 
            />
          </Link>
          <div className='flex items-center sm:space-x-4'>
            <Link href="/cart">
              <Image 
                src={`${props.cart ? props.cart : "/images/w-ic-cart.svg"}`} 
                alt="Cart Icon" 
                width={22} 
                height={22} 
                className='sm:flex  hidden'
              />
            </Link>
            <div className='text-xs flex space-x-1'>
               <p>Cart </p> 
               <p>(0)</p> 
            </div>
          </div>

          <div className='2xl:hidden flex'>
            <Link href="">
              <Image 
                src={`${props.menuBar ? props.menuBar : "/images/w-menu-bar.svg"}`}  
                alt="Cart Icon" 
                width={24} 
                height={24} 
                onClick={() => SetToggle(!toggle)}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;