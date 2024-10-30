import auth from "../utils/auth";

const GetCustomer = async () => {
  try {
    const response = await fetch("http://localhost:5137/api/customers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get customers.");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};
export default GetCustomer;
