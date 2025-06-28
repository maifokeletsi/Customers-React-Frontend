import React, { useState } from 'react';
import axios from 'axios';

function AddCustomerForm() {
  const [customer, setCustomer] = useState({ fullName: '', email: '', city: '' });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://springbootazdemo-production.up.railway.app/api/add', customer);
    alert('Customer added successfully!');
    setCustomer({ fullName: '', email: '', city: '' });
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Customer</h2>
      <input name="fullName" value={customer.fullName} onChange={handleChange} placeholder="Full Name" required />
      <input name="email" value={customer.email} onChange={handleChange} placeholder="Email" required />
      <input name="city" value={customer.city} onChange={handleChange} placeholder="City" required />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddCustomerForm;
