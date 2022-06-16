import { mediaDetailsEndpoint } from "../api/endpoint";
import axios from "axios";

class MediaDetailService{
    fetchMediaDetails(type,id) {
        return axios.get(mediaDetailsEndpoint(type,id));
    }
}

export default new MediaDetailService();