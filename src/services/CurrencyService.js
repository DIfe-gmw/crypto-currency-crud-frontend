import axios from 'axios';

const CURRENCY_API_BASE_URL = "http://localhost:8080/api/v1/currency";

class CurrencyService {

    getCurrencies() {
        return axios.get(CURRENCY_API_BASE_URL);
    }

    createCurrency(currency) {
        return axios.post(CURRENCY_API_BASE_URL, currency);
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