const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1',
    params: {
        api_key: process.env.SENHA_COMPANY
    }
});

module.exports = instanciaAxios;