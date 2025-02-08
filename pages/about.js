import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import Brand from '../components/Layout/Brands';
import Faq from '../components/Layout/Faq';


export default function AboutUs() {
  

  const marquee = [
    "Timekeeping",
    "Exclusivity",
    "Precision",
    "Watches",
    "Luxury"
  ]

  const services = [
    {
      id: 1,
      src: '/images/ic-shopping.svg',
      alt:'shopping icon image',
      dimension: 70,
      heading: 'Free Shipping',
      description: 'Enjoy the convenience of complimentary shipping on all orders.'
    },
    {
      id: 2,
      src: '/images/ic-easy.svg',
      alt: 'Easy Returns icon image',
      dimension: 70,
      heading: 'Easy Returns',
      description: 'Experience peace of mind with our hassle-free return policy.'
    },
    {
      id: 3,
      src: '/images/ic-24-hours.svg',
      alt: 'Fast Delivery icon image',
      dimension: 70,
      heading: 'Fast Delivery',
      description: 'Get your hands on your coveted timepiece quickly with our fast delivery service.'
    },
    {
      id: 4,
      src: '/images/ic-fast.svg',
      alt: 'Expert Support icon image',
      dimension: 70,
      heading: 'Expert Support',
      description: 'Receive personalized assistance from our expert team, dedicated to helping you with all your watch needs.'
    }
  
  ]

  return (
    <Layout>
      <div className="about-hero py-16 bg-gray-50 overflow-x-hidden">
        <div>
          <h1 className='w-full px-4 lg:p-0 lg:w-1/2 mx-auto'>About</h1>
          <h1 className="text-4xl my-4 w-full px-4 lg:p-0 lg:w-1/2 mx-auto">Our Story</h1>

          <div className="hero-images w-full mt-12 lg:mt-24 flex gap-4 lg:gap-8">
            <div className='w-1/3'>
              <Image 
                src="/images/EditedPic.jpg" 
                alt="Global Times Story" 
                width={600} 
                height={400}
              />
            </div>
            
            <div className='relative w-2/3'>
              <Image 
                src="/images/RedoneThumb-p-800.jpg" 
                alt="Global Times Story" 
                fill 
                className="absolute object-cover"
              />
            </div>
          </div>

          <div className='relative'>
            <div className='pre-experience-container lg:flex lg:flex-col-reverse px-4 lg:px-0'>
              <div className='flex items-center lg:items-baseline mt-10 lg:w-1/2 mx-auto gap-4'>
                <h3 className="text-5xl text-black font-medium">20</h3>
                <p className='w-1/4 lg:w-full'>Years of Experience</p>
              </div>

              <div className='pre-experience-text mt-6 lg:flex lg:w-1/2 mx-auto justify-between'>
                <p className="text-md text-gray-700 mb-4 w-full lg:w-1/4">
                  We strive to provide exceptional customer service, ensuring that your shopping experience with us is nothing short of extraordinary.
                </p>
                <p className="text-md text-gray-700 mb-4 w-full lg:w-2/4">
                  With years of experience in the watch industry, our team is dedicated to curating a meticulously selected collection of watches from renowned brands and emerging designers alike.
                </p>
              </div>
            </div>

            <div className="stats absolute lg:right-1/4 lg:bottom-2 lg:flex lg:justify-between lg:w-1/4">
              <div className='marquee-sliding w-full mt-5 px-4 lg:mt-0 lg:bottom-0 lg:p-0 lg:w-full'>
                <marquee>
                  <div className='flex'>
                      {marquee.map((list, index) => {
                          return(
                              <div className='flex items-center'>
                                <Image 
                                src={"/images/Star.svg"}
                                width={20}
                                height={20}
                                />

                                <li key={index} className='list-none mx-6'>{list}</li>
                              </div> 
                          )
                      })}
                  </div>
                </marquee>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <section className="our-mission my-16 lg:my-32">
        <div className="mission-container w-full lg:w-1/2 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10">
            <div className="w-full lg:w-1/2 px-4 lg:px-0 mt-6 lg:mt-0">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-md text-gray-700">
                At Global Times, our mission is to honor the art of horology by delivering unparalleled craftsmanship and personalized service. Founded over 20 years ago in Connecticut, we have grown from a single family-owned shop in Stamford to a network of six locations across Connecticut and New York. Our roots in traditional watchmaking drive us to offer a carefully curated selection of timepieces that cater to diverse tastes and styles.We specialize in all types of watch repairs and carry a broad range of accessories to complement your collection. Whether restoring a cherished heirloom or helping you find the perfect accessory, we are committed to ensuring your timepiece remains a testament to precision and beauty. Our dedication to exceptional service and quality is reflected in every watch we handle and every customer we serve.
              </p>
              <div className="button-wrap mt-10">
                <Link href="/contact-us">
                  <div className='inline-block py-3 px-4 border border-black text-xs hover:text-white hover:bg-black'>Contact us</div>
                </Link>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <Image 
                src="/images/mission.jpg" 
                alt="Our Mission" 
                width={700} 
                height={400} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-vision my-16 lg:my-32">
        <div className="vision-container w-full lg:w-1/2 mx-auto">
          <div className="flex flex-col items-center px-4 lg:px-0 lg:flex-row lg:gap-10">
            <div className="w-full lg:w-1/2">
                <Image 
                  src="/images/vision.jpg" 
                  alt="Our Vision" 
                  width={700} 
                  height={400} 
                />
            </div>

            <div className="w-full mt-6 lg:mt-0 lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <div className="text-md text-gray-700">
                Our vision is to become a trusted destination for watch enthusiasts and collectors alike, where heritage meets innovation, and timeless quality is cherished. We believe that a watch is more than a functional accessory—it is a piece of history, a symbol of craftsmanship, and a reflection of personal style.
                <p className='mt-2'>
                  As we continue to grow, with locations spanning from Albany to our founding store in Stamford, we envision a future where every individual finds a watch that resonates with their story, regardless of style or budget. We aspire to enrich the lives of our customers through a thoughtful selection of watches and exceptional service, ensuring that each timepiece brings joy and becomes a memorable part of life’s moments.
                </p>
              
              </div>
              <div className="button-wrap mt-10">
                <Link href="/contact-us">
                  <div className='inline-block py-3 px-4 border border-black text-xs hover:text-white hover:bg-black'>View Collection</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="services-section my-16 lg:my-32 bg-black text-white">
          <div className="services-container w-full flex justify-between text-sm gap-8 px-4 lg:px-0 lg:w-1/2 lg:mx-auto">
            <div className='services-left flex flex-col justify-center w-1/2 md:w-1/3'>
              <div className='py-4'>
                <p className='text-neutral-400'>01</p>
                <p className=' mt-1'>Battery & Power Services</p>
                <p className='text-neutral-400 mt-3'>
                  Our experts quickly and efficiently replace batteries and address any power issues, ensuring your watch stays powered and accurate.
                </p>
              </div>

              <div className='py-4'>
                <p className='text-neutral-400'>03</p>
                <p className=' mt-1'>Crystal & Exterior Restoration</p>
                <p className='text-neutral-400 mt-3'>
                  Our exterior restoration services include crystal replacement and polishing, ensuring your watch remains visually stunning and scratch-free.
                </p>
              </div>       
            </div>

            <div className='services-image-container relative w-1/3 hidden md:block'>
                <Image 
                  src={"/images/innovation.png"}
                  fill
                  className=' absolute object-contain'
                />
            </div>
                    
            <div className='services-right w-1/2 md:w-1/3'>
              <div className='py-4 flex flex-col justify-center'>
                  <p className='text-neutral-400'>02</p>
                  <p className=' mt-1 leading-6'>Movement & Mechanism Maintenance'</p>
                  <p className='text-neutral-400 mt-3'>
                    We specialize in servicing the internal mechanisms of your watch, whether it's a full service for automatic movements or repairs to critical parts like the stem and crown, maintaining the watch’s precision.
                  </p>
              </div>
             
              <div className='py-4'>
                <p className='text-neutral-400'>04</p>
                <p className=' mt-1  leading-6'>Watch Band & Accessory Replacement</p>
                <p className='text-neutral-400 mt-3'>
                  From replacing worn-out watch bands to offering new strap styles, we help you personalize your watch to fit your style and comfort.
                </p>
              </div>
            </div>
          </div>
      </section>

      <section className="our-commitment my-16 lg:my-32">
        <div className="empowerment-container w-full mx-auto lg:w-1/2">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="w-full px-4 lg:w-1/2 lg:px-0">
              <h2 className="text-4xl font-medium mb-6 leading-10">Our Commitment to Empowerment</h2>
              <div className="text-md text-gray-700">
                At Global Times, we are dedicated to fostering an inclusive and inspiring work environment where every individual is valued, respected, and empowered to achieve their fullest potential. We believe that personal and professional growth go hand in hand, which is why we prioritize continuous training and development for our team. Through these efforts, we cultivate a culture of innovation, collaboration, and excellence.
                <p className='mt-2'>
                  Our commitment to empowerment extends beyond our team to our valued customers. By offering a thoughtfully curated collection, educational resources, and engaging events, we encourage watch enthusiasts to explore their passion for timepieces. We aim to bring the joy of collecting, wearing, and cherishing watches that resonate personally, connecting each individual to a story that reflects their unique style and personality.
                </p>
              </div>

              <div className="button-wrap mt-10">
                <Link href="/contact-us">
                  <div className='inline-block py-3 px-4 border border-black text-xs hover:text-white hover:bg-black'>Explore Products</div>
                </Link>
              </div>

              <div className='mt-12'>
                <p>Watch Repairs Completed</p>
                <p className='text-5xl'>50,000+</p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 lg:px-0">
              <Image 
                src="/images/Empowerment.jpg" 
                alt="Empowerment Img" 
                width={750}
                height={400}
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='w-full mx-auto my-16 p-4 lg:p-0 lg:w-1/2 lg:my-32'>
        <div className='sub-service-container text-center grid grid-cols-2 lg:grid-cols-4 gap-12'>
          {
            services.map((service, index) =>{
              return(
                <div className='overall-container' key={index}>
                  <div className='image-wrapper flex justify-center'>
                    <Image 
                      src={service.src}
                      alt={service.alt}
                      width={service.dimension}
                      height={service.dimension}
                    />
                  </div>
                  <p className='sub-service-heading mt-3 font-medium'>{service.heading}</p>
                  <p className='sub-service-description mt-1 text-xs'>{service.description}</p>
                </div>
              )
            })
          }
        </div>

      </section>

     
      <Faq />
      <Brand />
    </Layout>
  );
}