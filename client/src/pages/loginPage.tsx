import React, { useState } from "react";
// import './CustomerForm.css'; // Optional: Add any styles for the form

const CustomerForm = () => {
  // Form state variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(username, password);

    // Basic validation for required fields
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    // Reset error
    // setError(null);

    // Prepare data to send to the server
    const customerData = {
      username,
      password,
    };
    console.log(customerData);

    try {
      // this will change once route is finished.
      const response = await fetch("/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit customer details.");
      }

      // Success message and clear input fields
      setSuccessMessage("Customer details submitted successfully!");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setError("An error occurred while submitting customer details.");
    }
  };

  return (
    <div className="customer-form-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="customer-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default CustomerForm;
