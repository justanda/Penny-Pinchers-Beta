
// this page is to take input from the customer
// we solicit information from the customer and put it in postgres via api
// called from the Header.tsx component

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// //import './CustomerForm.css'; // Optional: Add any styles for the form

const CustomerForm = () => { 
  // Form state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation (you can improve this)
    // TODO: COMPLETE FORM / INPUT VALIDATION
    if (!name || !email || !username || !phone || !address || !city || !zipCode) {
      setError('All fields are required.');
      return;
    }

    // Reset error
    setError(null);

    // Prepare data to send to the server
    const customerData = {
      name,
      email,
      username,    // Include username
      phone,       // Include phone number
      address,
      city,
      zipCode      // Use zipCode instead of postalCode
    };

    try {
      // Send POST request to your backend
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit customer details.');
      }

      // Success message
      setSuccessMessage('Customer details submitted successfully!');
      setName('');
      setEmail('');
      setUsername(''); // Clear username field
      setPhone('');    // Clear phone field
      setAddress('');
      setCity('');
      setZipCode('');  // Clear zipCode field
    } catch (err) {
      console.error(err);
      setError('An error occurred while submitting customer details.');
    }
  };

  return (
    
    <div className="container my-4">
      <h1 className="mb-3 text-center">Customer Form</h1>
      {error && <p className="alert alert-danger text-center">{error}</p>}
      {successMessage && <p className="alert alert-success text-center">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="customer-form p-4 shadow-sm rounded" style={{ backgroundColor: '#f9f9f9' }}>
        {[
          { label: "Name", value: name, setter: setName, type: "text" },
          { label: "Email", value: email, setter: setEmail, type: "email" },
          { label: "Username", value: username, setter: setUsername, type: "text" },
          { label: "Phone", value: phone, setter: setPhone, type: "tel" },
          { label: "Address", value: address, setter: setAddress, type: "text" },
          { label: "City", value: city, setter: setCity, type: "text" },
          { label: "Zip Code", value: zipCode, setter: setZipCode, type: "text" },
        ].map(({ label, value, setter, type }, idx) => (
          <div className="row mb-3" key={idx}>
            <label className="col-sm-4 col-form-label">{label}:</label>
            <div className="col-sm-8">
              <input
                type={type}
                className="form-control"
                value={value}
                onChange={(e) => setter(e.target.value)}
                required
              />
            </div>
          </div>
        ))}
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </form>
    </div>
  
  );
 };

export default CustomerForm;