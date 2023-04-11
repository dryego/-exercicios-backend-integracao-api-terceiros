const express = require('express');
const { detalharEmpresa } = require('./controladores/empresas');

const rotas = express.Router();

rotas.get('/empresas', detalharEmpresa);

module.exports = rotas;