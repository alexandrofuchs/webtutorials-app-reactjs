import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
});

const onSucess = res => {
    try {
        return {
            data: res.data,
            error: null
        }
    } catch (err) {
        return {
            data: null,
            error: err.response ? err.response.data : err.message,
        }
    }
};

const onRejected = err => {
    try {
        if (err.response) {
            return {
                data: null,
                error: err.response.data,
            };
        }
        return {
            data: null,
            error: "Falha na conexão!" ,
        };
    } catch (err) {
        return {
            data: null,
            error: err.response ? err.response.data : err.message,
        }
    }
}

Api.interceptors.response.use(onSucess, onRejected);

export default Api;