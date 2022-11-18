import axios from "axios";

const BOOK_API_REST_URL = "http://localhost:8080/";

class APIService {
  url(path) {
    return BOOK_API_REST_URL + path;
  }

  getOrigins() {
    return axios.get(this.url("origins"));
  }
}

export default new APIService();
