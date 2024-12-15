import Image from 'next/image';
import Layout from '../components/Layout/Layout';

export default function AboutUs() {
  return (
    <Layout>
      <div className="about-hero py-16 bg-gray-50">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-gray-700 mb-4">
              Founded over 20 years ago in Connecticut, Global Times has grown from a single family-owned shop in Stamford to a network of six locations across Connecticut and New York.
            </p>
            <div className="stats flex space-x-8 mt-8">
              <div>
                <h3 className="text-3xl font-bold text-black">20+</h3>
                <p>Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black">50,000+</h3>
                <p>Watches Repaired</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image 
              src="/images/EditedPic.jpg" 
              alt="Global Times Story" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <section className="our-mission py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>
          <div className="flex items-center">
            <div className="w-1/2">
              <Image 
                src="/images/mission.jpg" 
                alt="Our Mission" 
                width={500} 
                height={400} 
                className="rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-12">
              <p className="text-lg text-gray-700">
                At Global Times, our mission is to honor the art of horology by delivering unparalleled craftsmanship and personalized service. We specialize in watch repairs and carry a broad range of accessories to complement your collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { 
                title: 'Battery Replacement', 
                description: 'Quick and efficient battery services',
                icon: '🔋'
              },
              { 
                title: 'Movement Repair', 
                description: 'Expert mechanism maintenance',
                icon: '⚙️'
              },
              { 
                title: 'Crystal Restoration', 
                description: 'Polishing and replacement',
                icon: '✨'
              },
              { 
                title: 'Band Replacement', 
                description: 'New straps and accessories',
                icon: '⌚'
              }
            ].map((service) => (
              <div 
                key={service.title} 
                className="service-card text-center bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}