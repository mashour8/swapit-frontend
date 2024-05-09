import axios from "axios";

class DraftService {
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
  createDraft = (requestBody) => {
    return this.api.post("/api/draft", requestBody);
  };

  getAllDraft = () => {
    return this.api.get(`/api/draft`);
  };

  getDraft = (id) => {
    return this.api.get(`/api/draft/${id}`);
  };

  updateDraft = (id, requestBody) => {
    return this.api.put(`/api/draft/${id}`, requestBody);
  };

  deleteDraft = (id) => {
    return this.api.delete(`/api/draft/${id}`);
  };
}

const draftServer = new DraftService();

export default draftServer;
