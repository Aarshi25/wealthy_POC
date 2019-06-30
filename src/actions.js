import {DataService} from './DataService';

export const actions = {
    GET_STOCKS : 'GET_STOCKS',
    SET_DATE: 'SET_DATE',
    SET_STOCKS: 'SET_STOCKS'
}

export const setDate = () => {
    let today = new Date();
    const date = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
    return{
        type: actions.SET_DATE,
        payload: date,
    }
}

export const getStocks = (data) => {
    return {
        type : actions.GET_STOCKS,
        payload: data,
    }
}
