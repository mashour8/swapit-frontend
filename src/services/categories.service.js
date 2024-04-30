import axios from "axios";

class CategoriesService {
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
  createCategory = (requestBody) => {
    return this.api.post("/api/categories", requestBody);
  };

  getAllCategory = () => {
    return this.api.get("/api/categories");
  };

  getCategory = (id) => {
    return this.api.get(`/api/categories/${id}`);
  };

  updateCategory = (id, requestBody) => {
    return this.api.put(`/api/categories/${id}`, requestBody);
  };

  deleteCategory = (id) => {
    return this.api.delete(`/api/categories/${id}`);
  };
}

const categoriesServer = new CategoriesService();

export default categoriesServer;
