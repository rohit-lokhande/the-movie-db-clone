import axios from "axios";
import { searchQueryEndpoint } from "../api/endpoint";

class SearchService {
    fetchMediaUsingQuery(query) {
        return axios.get(searchQueryEndpoint(query));
    }
}

export default new SearchService();