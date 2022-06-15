import axios from "axios";
import { paginationEndpoint } from "../api/endpoint";

class PaginationService {
    fetchPaginationList(type,filter) {
        return axios.get(paginationEndpoint(type,filter));
    }
}

export default new PaginationService();