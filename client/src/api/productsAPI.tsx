const retrieveProducts = async () => {
  try {
    const response = await fetch("/api/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Invalid user API response, check network tab");
    }
    return data;
  } catch (err) {
    console.log("Error from data retrieval:", err);
    return [];
  }
};

const filteredByCategory = async (value: string) => {
  try {
    const response = await fetch(`/api/products/category/${value}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Invalid user API response, check network tab");
    }
    return data;
  } catch (err) {
    console.log("Error from data retrieval:", err);
    return [];
  }
};

const fetchProductById = async (id: number) => {
  try {
    const response = await fetch(`api/products/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to fetch product with Id: ${id}`);
    }
    return data;
  } catch (err) {
    console.log("Error from data retrieval:", err);
    return [];
  }
};

export { retrieveProducts, filteredByCategory, fetchProductById };
