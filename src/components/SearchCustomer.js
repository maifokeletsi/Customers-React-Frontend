import React, { useState } from 'react';
import axios from 'axios';

function SearchCustomer() {
  const [id, setId] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://springbootazdemo-production.up.railway.app/api/search/${id}`);
      setFullName(res.data);
    } catch (err) {
      console.error(err);
      setFullName('Customer not found.');
    }
  };

  return (
    <div>
      <h2>Search Customer by ID</h2>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder="Customer ID" />
      <button onClick={handleSearch}>Search</button>
      <p>Full Name: {fullName}</p>
    </div>
  );
}

export default SearchCustomer;
