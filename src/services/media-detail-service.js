import { mediaDetailsEndpoint } from "../api/endpoint";
import axios from "axios";

class MediaDetailService{
    fetchMediaDetails(id) {
        return axios.get(mediaDetailsEndpoint(id));
    }
}

export default new MediaDetailService();