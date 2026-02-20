import axios from "axios"

const api = axios.create({
    baseURL:"https://v6.exchangerate-api.com/v6/3e169005f7716cd5f35fc0e3"
})

export const currencyConverter = async (fromCurrency,toCurrency,Amount) => {
    const res = await api.get(`pair/${fromCurrency}/${toCurrency}/${Amount}`);
}