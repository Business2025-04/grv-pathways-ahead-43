
import React from 'react';
import ContactMessagesList from '@/components/Admin/ContactMessagesList';

const Admin = () => {
  return (
    <div className="pt-20">
      <section className="bg-grv-blue py-12 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Manage your website content and view contact messages.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <ContactMessagesList />
      </section>
    </div>
  );
};

export default Admin;
