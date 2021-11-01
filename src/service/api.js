import axios from "axios";

const appClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
});
let header = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export default {

    get_products() {
        return appClient.get("product", header);
    },
    get_catalogues() {
        return appClient.get("catalogue", header);
    },
    add_products(payload) {
        return appClient.post("product", payload, header);
    },
    add_catalogues(payload) {
        return appClient.post("catalogue", payload, header);
    }

};