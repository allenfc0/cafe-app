//cmd line; npm add axios
import axios from 'axios'


class ItemDataService {
    executeGetAllItems() {
        //console.log("executed service");
        return axios.get(`http://localhost:8080/items-list`);
    }

    executeFindItemById(id) {
        return axios.get(`http://localhost:8080/items/${id}`);
    }

    executeDeleteItemById(id) {
        return axios.delete(`http://localhost:8080/item/delete/${id}`);
    }

    executeCreateItem(item) {
        return axios.post(`http://localhost:8080/item/create`, item);
    }

    executeUpdateItem(id, item) {
        return axios.put(`http://localhost:8080/item/update/${id}`, item);
    }
    
}


export default new ItemDataService();