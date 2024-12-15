import { useState } from 'react';
import Image from 'next/image';

const AppraisalSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const services = [
    {
      number: '01.',
      title: 'Watch Repair & Maintenance',
      description:
        'Our skilled technicians meticulously assess, repair, and service your watches, restoring them to their optimal condition. From battery replacements to intricate mechanical adjustments, we ensure your timepiece runs smoothly and accurately.',
    },
    {
      number: '02.',
      title: 'Personalized Watch Consultation',
      description:
        'Our knowledgeable advisors provide tailored guidance to help you explore the vast world of watches with confidence. We take the time to understand your preferences and lifestyle, offering recommendations that make finding the right watch an enjoyable experience.',
    },
    {
      number: '03.',
      title: 'Expert Watch Selection Assistance',
      description:
        'Let us help you choose the perfect watch that aligns with your personal style and needs. Our experienced team is dedicated to making your watch selection process seamless and fulfilling, whether you’re seeking a luxury timepiece or an everyday classic.',
    },
  ];

  return (
    <section className="appraisal bg-black text-white">
      <div className="w-layout-blockcontainer container w-container">
        <div className="appraisal-wrap flex flex-col md:flex-row">
          <div className="appraisal-left md:w-2/3">
            <div>
              <h2 className="appraisal-title text-3xl font-bold">Luxury Watch Guidance</h2>
              <p className="appraisal-text mt-4 text-md text-white-600">
                Whether you're looking for a timeless piece for a special occasion or a reliable everyday watch, our dedicated team is here to help you find the perfect match that reflects your unique personality and style.
              </p>
            </div>
            <div className="appraisal-data mt-8 space-y-6">
              {services.map((item, index) => (
                <div key={index} className="appraisal-info w-dropdown border-b border-gray-200">
                  <div
                    className="appraisal-toggle w-dropdown-toggle flex items-center justify-between cursor-pointer p-4"
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={activeDropdown === index}
                    aria-controls={`service-description-${index}`}
                  >
                    <div className="font-semibold">{item.number}</div>
                    <h4 className="toggle-text text-xl">{item.title}</h4>
                  </div>
                  {activeDropdown === index && (
                    <div id={`service-description-${index}`} className="appraisal-list w-dropdown-list p-4">
                      <div className="appraisal-box">
                        <p className="appraisal-list-text text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="appraisal-img relative md:w-1/3">
            <Image
              src="/images/roger-varenhorst-1UL_ux0Zo7g-unsplash.jpg"
              alt="Appraisal Image"
              layout="responsive"
              width={500}
              height={300}
              className="appraisal-image w-full h-auto object-cover"
            />
            <div className="on-scroll bg absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppraisalSection;
