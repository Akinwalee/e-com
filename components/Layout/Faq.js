import React, { useState } from 'react'
import Image from 'next/image';

const Faq = () => {


const [faqToggle, setFaqToggle] = useState(null);

function handleToggle(id) {
    setFaqToggle(faqToggle === id ? null : id);
  }
const faqs = [
    {
        id:1,
        src:'/images/faq-arrow.svg',
        alt:'Arrow image',
        dimension: 25,
        question:'Do you offer international shipping?',
        answer:'Yes, we provide international shipping to select countries. Shipping times and costs vary depending on the destination. Please refer to our Shipping Policy or contact our customer support team for more details.'
    },
    {
        id:2,
        src:'/images/faq-arrow.svg',
        alt:'Arrow image',
        dimension: 25,
        question:'Are your watches covered by a warranty?',
        answer:'Yes, all of our watches come with a manufacturer’s warranty. Warranty periods vary by brand and model but typically cover manufacturing defects for a specified duration. For more information, please review the warranty details provided with your purchase.'
    },
    {
        id:3,
        src:'/images/faq-arrow.svg',
        alt:'Arrow image',
        dimension: 25,
        question:'How can I contact customer support?',
        answer:'You can reach our customer support team via email at support@example.com or by calling us at 1-800-123-4567. Our team is available Monday through Friday, from 9:00 AM to 5:00 PM EST, to assist with any questions or concerns.'
    },
    {
        id:4,
        src:'/images/faq-arrow.svg',
        alt:'Arrow image',
        dimension: 25,
        question:'What is your return policy?',
        answer:' We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a hassle-free return policy. Items must be returned within 30 days of purchase, in their original condition, for a full refund or exchange. Please see our Returns Policy for more information.'
    },
]
return (
    <section className='w-full p-4 mx-auto my-16 lg:my-32 lg:p-0 lg:w-1/2'>
        <div  className='faq-container'>
            <p className='text-xs'>FAQ's</p>
            <p className='text-3xl font-medium my-5'>Have any Questions?</p>
            <div className='question-section flex flex-col lg:flex-row'>
                <div className='question-img w-full flex items-center transition-transform duration-700 lg:pr-12 lg:w-1/2 '>
                    <Image 
                        src='/images/FixedSide-p-500.png'
                        alt='Faq-Image'
                        width={800}
                        height={350}
                        className=''
                    />
                </div>
                <div className='questions mt-10 lg:mt-0 w-full lg:w-1/2'>
                
                    {faqs.map((faq) => {
                        return(
                                <div key={faq.id} className='py-6 border-t border-black'>
                                    <div className='flex gap-5 pb-3 items-center'>
                                        <Image 
                                            src={faq.src}
                                            alt={faq.alt}
                                            width={faq.dimension}
                                            height={faq.dimension}
                                            onClick={() => handleToggle(faq.id)}
                                            className={`cursor-pointer ${faqToggle === faq.id ? "rotate-90 transition-transform duration-300" : ""}`}
                                        />
                                        <p className='text-lg font-medium'>{faq.question}</p>
                                    </div>
                                    {faqToggle === faq.id && (
                                        <div className="faq-answer mt-2 px-12">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>  
                        )
                    })}
                
                    <div className='flex gap-5 py-3 text-xs mt-10'>
                        <p>Explore Collection</p>
                        <Image
                            src='/images/ic-arrow.svg'
                            alt='arrow icon'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq