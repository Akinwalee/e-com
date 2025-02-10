import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import Cta from '../components/Layout/Cta';
import Faq from '../components/Layout/Faq';
import Brands from '../components/Layout/Brands';
import Link from 'next/link';

 const contact = () => {
  return (
    <Layout>
      <div className='overall-container w-full p-4 mx-auto mt-16 lg:mb-48 lg:p-0 lg:w-1/2'>
        <p className='text-xs'>GET IN TOUCH WITH US</p>
        <p className='text-5xl mt-4'>Contact us</p>

        <div className='contact-container flex flex-col justify-between my-16 gap-16 lg:flex-row'>
          <div className='image-container-left relative h-[700px] w-full lg:w-1/2 lg:h-auto'>
              <Image
                src='/images/EditedPic-p-500.jpg'
                fill
                className='object-cover'
              />
          </div>
          <div className='contact-container-forms w-full py-4 lg:py-16 lg:w-1/2 '>
              <div className='contact-subcontainer-form flex gap-6 text-sm'>
                <div className='w-1/2'>
                  <p>First Name</p>
                  <input className='w-full mt-2 py-2 text-xs border-b border-black focus:outline-none' type="text" placeholder='Enter your first name'></input>
                </div>
                <div className='w-1/2'>
                  <p>Last Name</p>
                  <input className='w-full mt-2 py-2 text-xs border-b border-black focus:outline-none' type="text" placeholder='Enter your last name'></input>
                </div>
              </div>

              <div className='contact-subcontainer-form flex gap-6 mt-10 text-sm'>
                <div className='w-1/2'>
                  <p>Email</p>
                  <input className='w-full mt-2 py-2 text-xs border-b border-black  focus:outline-none' type="email" placeholder='Enter your email'></input>
                </div>
                <div className='w-1/2'>
                  <p>Phone number</p>
                  <input className='w-full mt-2 py-2 text-xs border-b border-black focus:outline-none' type="text" placeholder='Enter your phone number'></input>
                </div>
              </div>

              <div className='mt-10'>
                <p className='text-sm'>Message</p>
                <textarea placeholder="Enter your message" className=' border-b border-black w-full h-40 focus:outline-none pt-2 text-xs'></textarea>
              </div>

              <div className='policy-container mt-10 flex text-xs justify-between '>
                <div className='flex gap-2 items-center'>
                  <input type="checkbox" className='cursor-pointer'></input>
                  <p>I agree to 
                    <Link href="/contact" className='hover:underline cursor-pointer'> Terms
                    </Link> and 
                    <Link href="/contact" className='hover:underline cursor-pointer'> Privacy policy
                    </Link>
                  </p>
                </div>

                <div className='py-3 px-4 border-black border hover:text-white hover:bg-black duration-300 cursor-pointer'>Submit</div>
              </div>
          </div>
        </div>
      </div>
      <Faq />
      <Cta />
      <Brands />
    </Layout>
  )
}

export default contact;