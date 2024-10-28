
// this page is to take input from the customer
// we solicit information from the customer and put it in postgres via api

import React, { useState } from 'react';
//import './CustomerForm.css'; // Optional: Add any styles for the form

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
    <div className="customer-form-container">
      <h1>Customer Form</h1>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="customer-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomerForm;