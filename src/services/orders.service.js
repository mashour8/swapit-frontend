import axios from "axios";

class OrderService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL || "http://localhost:5005",
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }
  createOrder = (requestBody) => {
    return this.api.post("/api/orders", requestBody);
  };

  getAllOrder = () => {
    return this.api.get(`/api/orders`);
  };

  getOrder = (id) => {
    return this.api.get(`/api/orders/${id}`);
  };

  updateOrder = (id, requestBody) => {
    return this.api.put(`/api/orders/${id}`, requestBody);
  };

  deleteOrder = (id) => {
    return this.api.delete(`/api/orders/${id}`);
  };
}

const orderServer = new OrderService();

export default orderServer;
