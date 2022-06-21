import { mediaDetailsEndpoint, watchProvidersEndpoint } from "../api/endpoint";
import axios from "axios";

class MediaDetailService {
    fetchMediaDetails(type, id) {
        return axios.get(mediaDetailsEndpoint(type, id));
    }

    fetchWatchProviders(type, id) {
        return axios.get(watchProvidersEndpoint(type, id));
    }
}

export default new MediaDetailService();