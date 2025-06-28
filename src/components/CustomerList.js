import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('https://springbootazdemo-production.up.railway.app/api/getAllCustomers')
      .then(res => setCustomers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Customers</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.fullName} - {customer.email} - {customer.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
