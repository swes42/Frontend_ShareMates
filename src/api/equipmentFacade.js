import { LocalURL as URL } from '../utils/settings.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderHook } from '@testing-library/react';
//import { OnlineURL as URL } from '../utils/settings.js'

function handleHttpErrors(res) {
    if (!res.ok){
        return Promise.reject({ status: res.status, fullError: res.json()})

    }
    return res.json();
}

    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }


//______________________________________________________

function equipmentFacade () {

    const getAllEquipments = () => {
        const options = makeOptions("GET", true);
        return fetch(URL + "api/equipment/allEquipments", options)
        .then(handleHttpErrors)
        
        }

    const addEquipment = () => {
        const options = makeOptions("POST", true);
        return fetch(URL + "api/equipment/addEquipment", options)
        .then(handleHttpErrors);
    }

    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*'

            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }






    return{
        getAllEquipments,
        addEquipment,
        
    }
}

const facade = equipmentFacade();
export default facade;