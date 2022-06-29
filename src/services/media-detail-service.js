import { mediaDetailsEndpoint, watchProvidersEndpoint,trailersEndpoint, castEndpoint } from "../api/endpoint";
import axios from "axios";

class MediaDetailService {
    fetchMediaDetails(type, id) {
        return axios.get(mediaDetailsEndpoint(type, id));
    }

    fetchWatchProviders(type, id) {
        return axios.get(watchProvidersEndpoint(type, id));
    }

    fetchTrailers(type, id) {
        return axios.get(trailersEndpoint(type, id));
    }

    
    fetchCast(type, id) {
        return axios.get(castEndpoint(type, id));
    }
}

export default new MediaDetailService();