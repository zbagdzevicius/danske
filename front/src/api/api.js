import axios from 'axios';

const SERVER_URL = 'https://danske-task-restf-app.herokuapp.com/';

const getPersonFubar = (input) => {
    return new Promise((resolve, reject) => [
        axios.get(`${SERVER_URL}/person/${input}`)
            .then((res) => {
                return resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    ]);
};

const getFacilityFubar = (valueOne) => {
    return new Promise((resolve, reject) => [
        axios.get(`${SERVER_URL}/facility/${valueOne}`)
            .then((res) => {
                return resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    ]);
};

const getExposureFubar = (valueTwo) => {
    return new Promise((resolve, reject) => [
        axios.get(`${SERVER_URL}/exposure/${valueTwo}`)
            .then((res) => {
                return resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            })
    ]);
};

export default {
    getPersonFubar,
    getFacilityFubar,
    getExposureFubar,
};
