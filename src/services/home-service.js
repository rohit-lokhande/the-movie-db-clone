import axios from "axios";
import { leatherboardEndpoint, popularListEndpoint, topRatedListEndpoint, trendingListEndpoint } from "../api/endpoint";
import leatherboard from '../assets/json/leatherboard.json';

class HomeService {
    fetchLeatherBoard() {
        return leatherboard;
    }

    fetchPopularMedia(type) {
        return axios.get(popularListEndpoint(type));
    }

    fetchTopRatedMedia(type) {
        return axios.get(topRatedListEndpoint(type));
    }

    fetchTrendingMedia(type) {
        return axios.get(trendingListEndpoint(type));
    }
}

export default new HomeService();