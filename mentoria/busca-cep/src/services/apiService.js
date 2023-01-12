const Base_Url = 'https://brasilapi.com.br/api'

const getStates = async () => {
    try {
        const request = await fetch(`${Base_Url}/ibge/uf/v1`)
        if(!request.ok) {
            throw new Error ('Ocorreu algo de errado com a requisição')
        }
        const response = await request.json();
        return response;
    } catch (e) {
        console.warn(e.message);
    }
}

const getCities = async (uf) => {
    try {
        const request = await fetch(`${Base_Url}/ibge/municipios/v1/${uf}`)
        if(!request.ok) {
            throw new Error ('Ocorreu algo de errado com a requisição')
        }
        const response = await request.json();
        return response;
    } catch (e) {
        console.warn(e.message);
    }
}

const getLocalByCep = async (cep) => {
    if(!cep || cep === "") {
        return ""
    }
    try {
        const request = await fetch(`${Base_Url}/cep/v2/${cep}`)
        if(!request.ok) {
            throw new Error ('Ocorreu algo de errado com a requisição')
        }
        const response = await request.json();
        return response;
    } catch (e) {
        console.warn(e.message);
    }
}


export { getStates, getCities, getLocalByCep }
