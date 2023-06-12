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

function lendFacade () {

    const createLend = () => {
        const options = makeOptions("POST", true);
        return fetch(URL + "api/lend/createLend", options)
        .then(handleHttpErrors)
    }

    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json'
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
        createLend
    }
}    

    const facade = lendFacade();
    export default facade;