import { useState } from 'react';
import Image from 'next/image';

const AppraisalSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const parentMarginTop = activeDropdown !== null ? "48px" : "96px"

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
      <div className="w-layout-blockcontainer px-4 lg:w-3/6 mx-auto py-24">
        <div className="appraisal-wrap grid lg:grid-cols-2">
          <div className="appraisal-left w-full ">
            <div>
              <h2 className="appraisal-title text-3xl">Luxury Watch Guidance</h2>
              <p className="appraisal-text mt-6 text-md text-white-600 lg:pr-12">
                Whether you're looking for a timeless piece for a special occasion or a reliable everyday watch, our dedicated team is here to help you find the perfect match that reflects your unique personality and style.
              </p>
            </div>

            <div className="appraisal-data space-y-6 transition-all duration-500" style={{marginTop: parentMarginTop}}>
              {services.map((item, index) => (
                <div key={index} className="appraisal-info w-dropdown border-b border-neutral-700 lg:w-5/6 ">
                  <div
                    className="appraisal-toggle w-dropdown-toggle flex space-x-6 text-md cursor-pointer p-2"
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={activeDropdown === index}
                    aria-controls={`service-description-${index}`}
                  >
                    <div className="font-semibold">{item.number}</div>
                    <h4 className="toggle-text text-md">{item.title}</h4>
                  </div>
                  {activeDropdown === index && (
                    <div id={`service-description-${index}`} className={`appraisal-list w-dropdown-list p-2 lg:p-4`}>
                      <div className="appraisal-box">
                        <p className="appraisal-list-text text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="appraisal-img relative h-[700px] lg:h-[auto] ">
            <Image
              src="/images/roger-varenhorst-1UL_ux0Zo7g-unsplash.jpg"
              alt="Appraisal Image"
              width={400}
              height={30}
              className='absolute w-full h-full'
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppraisalSection;
