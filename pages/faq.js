import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'How long does it take to repair a watch?',
      answer:
        'The repair time depends on the type of repair and the availability of parts. Most repairs are completed within 2-4 weeks.'
    },
    {
      question: 'Do you offer a warranty on repairs?',
      answer:
        'Yes, we offer a 6-month warranty on all repairs, covering any defects in materials or workmanship.'
    },
    {
      question: 'Can I send my watch for repair without visiting the store?',
      answer:
        'Yes, you can send your watch for repair by mail. Please contact us for shipping instructions.'
    },
    {
      question: 'Do you repair all watch brands?',
      answer:
        'We repair most major watch brands, including Rolex, Omega, Breitling, and more. Please contact us if you have a specific brand inquiry.'
    },
    {
      question: 'How much does a watch repair cost?',
      answer:
        'The cost of a watch repair depends on the type of repair and the parts required. Please contact us for a quote.'
    }
  ];

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Find answers to common questions about our watch repair services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FAQ List */}
          <div>
            <ul className="space-y-4">
              {faqData.map((item, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => toggleAnswer(index)}
                    className="flex items-center justify-between w-full py-3 text-left text-gray-800 hover:bg-gray-100 transition"
                  >
                    <span className="font-semibold">{item.question}</span>
                    <svg
                      className={`w-6 h-6 transition ${
                        activeIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeIndex === index && (
                    < div className="mt-2 text-gray-600">{item.answer}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 Watch Street, Stamford, CT 06902</p>
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>support@globaltimes.com</p>
                </div>

                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}