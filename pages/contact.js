import { useState } from 'react';
import Layout from '../components/Layout/Layout';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // TODO: Implement actual form submission logic
      console.log('Form submitted:', formData);
      
      setSubmitStatus({
        success: true,
        error: false,
        message: 'Thank you for your message. We will get back to you soon!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        error: true,
        message: 'Failed to submit. Please try again.'
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Global Times</h1>
            <p className="text-gray-600">
              We're here to help and answer any questions you might have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  />
                </div>

                {submitStatus.success && (
                  <div className="text-green-600 text-sm">
                    {submitStatus.message}
                  </div>
                )}

                {submitStatus.error && (
                  <div className="text-red-600 text-sm">
                    {submitStatus.message}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-grey transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
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
      </div>
    </Layout>
  );
}