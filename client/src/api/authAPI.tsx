import { Customer } from "../interfaces/Customer";

const Login = async (custInfo: Customer) => {
  try {
    const response = await fetch("http://localhost:5137/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(custInfo),
    });

    if (!response.ok) {
      throw new Error("Failed to login.");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};
export default Login;
