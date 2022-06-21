import axios from "axios";
import { paginationEndpoint } from "../api/endpoint";

class PaginationService {
    fetchPaginationList(type, filter,page) {
        return axios.get(paginationEndpoint(type, filter,page));
    }
}

export default new PaginationService();