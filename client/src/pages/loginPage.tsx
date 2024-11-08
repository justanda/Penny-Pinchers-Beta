import { ChangeEvent, useState, FormEvent } from "react";
import { login } from "../api/authAPI";
import Auth from "../utils/auth";

const Login = () => {
  const [customerData, setCustomerData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(customerData);
      Auth.login(data.token);
      setCustomerData({ username: "", password: "" });
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <div className="form-container">
      <form className="form login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        {/* Username input field */}
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            value={customerData.username || ""}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        {/* Password input field */}
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="********"
            value={customerData.password || ""}
            onChange={handleChange}
          />
        </div>
        {/* Submit button for the login form */}
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
