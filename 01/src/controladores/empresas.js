const instanciaAxios = require("../axios");
const fs = require('fs/promises');

const detalharEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.query;
    console.log(dominioEmpresa);

    try {
        const { data: empresa } = await instanciaAxios.get(`/?domain=${dominioEmpresa}`)//(`/?api_key=${process.env.SENHA_COMPANY}&domain=${dominioEmpresa}`);

        if (empresa && empresa.name) {
            const dadosEmpresa = JSON.parse(await fs.readFile('./src/dados/empresas.json'));
            dadosEmpresa.push(empresa);


            await fs.writeFile('./src/dados/empresas.json', JSON.stringify(dadosEmpresa, null, 2));
        }
        return res.status(200).json(empresa);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ menssagem: 'Erro Interno.' })
    }


}

module.exports = {
    detalharEmpresa
}