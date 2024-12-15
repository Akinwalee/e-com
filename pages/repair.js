import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';

export default function Repair() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    watchBrand: '',
    repairType: '',
    description: ''
  });

  const repairServices = [
    {
      title: 'Battery Replacement',
      description: 'Quick and efficient battery services for all watch types.',
      icon: '🔋'
    },
    {
      title: 'Movement Repair',
      description: 'Expert mechanism maintenance and calibration.',
      icon: '⚙️'
    },
    {
      title: 'Crystal Restoration',
      description: 'Scratch removal and crystal replacement.',
      icon: '✨'
    },
    {
      title: 'Band Replacement',
      description: 'New straps and accessories for all watch styles.',
      icon: '⌚'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement repair request submission
    console.log('Repair request:', formData);
  };

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Watch Repair Services</h1>
          <p className="text-gray-600">
            We offer a wide range of repair services for all watch types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Repair Services */}
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              {repairServices.map((service, index) => (
                <div key={index} className="bg-gray-100 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl text-blue-600 mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Repair Request Form */}
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
                  htmlFor="watchBrand"
                  className="block text-sm font-medium text-gray-700"
                >
                  Watch Brand
                </label>
                <input
                  type="text"
                  name="watchBrand"
                  id="watchBrand"
                  required
                  value={formData.watchBrand}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>

              <div>
                <label
                  htmlFor="repairType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Repair Type
                </label>
                <select
                  name="repairType"
                  id="repairType"
                  required
                  value={formData.repairType}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                >
                  <option value="">Select a repair type</option>
                  {repairServices.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <text area
                  name="description"
                  id="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Submit Repair Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}