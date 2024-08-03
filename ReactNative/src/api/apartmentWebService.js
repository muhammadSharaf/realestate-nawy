import ax from "./axiosConfig";
import axios from "axios";

export const getApartmentsWS = async () => {
    try {
        const res = await axios.get('/apartments');
        console.log('res', res);
        return res;
    } catch (err) {
        console.log('err', err);
        return err.response.data;
    }
};
