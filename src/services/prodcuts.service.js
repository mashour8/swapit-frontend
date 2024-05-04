import axios from "axios";

class ProductsService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }
  createProduct = (requestBody) => {
    return this.api.post("/api/products", requestBody);
  };

  getAllProducts = (LIMIT, offset) => {
    return this.api.get(`/api/products?limit=${LIMIT}&offset=${offset}`);
  };

  getProduct = (id) => {
    return this.api.get(`/api/products/${id}`);
  };

  updateProduct = (id, requestBody) => {
    return this.api.put(`/api/products/${id}`, requestBody);
  };

  deleteProduct = (id) => {
    return this.api.delete(`/api/products/${id}`);
  };
}

const productsServer = new ProductsService();

export default productsServer;
