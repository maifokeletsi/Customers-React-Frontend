import React from 'react';
import AddCustomerForm from './components/AddCustomerForm';
import CustomerList from './components/CustomerList';
import SearchCustomer from './components/SearchCustomer';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Customer Management App</h1>
      <AddCustomerForm />
      <hr />
      <CustomerList />
      <hr />
      <SearchCustomer />
    </div>
  );
}

export default App;
