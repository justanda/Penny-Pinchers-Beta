import { CustomerLogin } from "../interfaces/CustomerLogin";

const login = async (custInfo: CustomerLogin) => {
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(custInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Error from customer login:", err);
    return Promise.reject("Could not fetch customer info");
  }
};
export { login };
