import axios from 'axios';
import { toast } from 'react-toastify';

const CURRENCY_API_BASE_URL = "http://localhost:8080/api/v1/currency";

class CurrencyService {

    getCurrencies() {
        return axios.get(CURRENCY_API_BASE_URL);
    }

    createCurrency(currency) {
        if(currency.name.length != 0 && currency.description.length != 0 && currency.value.length != 0) {
            return axios.post(CURRENCY_API_BASE_URL, currency);
        }
        else {
            toast.error("Dados Inválidos.");
        }
    }

    getCurrencyById(currencyId) {
        return axios.get(CURRENCY_API_BASE_URL + '/' + currencyId);
    }

    updateCurrency(currency, currencyId) {
        return axios.put(CURRENCY_API_BASE_URL + '/' + currencyId, currency);
    }

    deleteCurrency(currencyId) {
        return axios.delete(CURRENCY_API_BASE_URL + '/' + currencyId);
    }
}

export default new CurrencyService()