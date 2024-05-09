import axios from "axios";

class SizesService {
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
  createSize = (requestBody) => {
    return this.api.post("/api/sizes", requestBody);
  };

  getAllSize = (LIMIT, offset) => {
    return this.api.get(`/api/sizes?limit=${LIMIT}&offset=${offset}`);
  };

  getSize = (id) => {
    return this.api.get(`/api/sizes/${id}`);
  };

  updateSize = (id, requestBody) => {
    return this.api.put(`/api/sizes/${id}`, requestBody);
  };

  deleteSize = (id) => {
    return this.api.delete(`/api/sizes/${id}`);
  };
}

const sizesServer = new SizesService();

export default sizesServer;
