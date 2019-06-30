import { actions } from "./actions";

const State = {
    currentDate:'',
    stocks:'',
    loading: false,
};

export const stockReducer = (state, action) => {
    switch (action.type) {
        case actions.SET_STOCKS:
            return{
                ...state,
                stocks: action.payload,
            };
        case actions.SET_DATE:
            return {
                ...state,
                currentDate: action.payload
            };
        case actions.GET_STOCKS:
            return {
                ...state,
                stocks: action.payload,
                loading: true
            };
        default:
            return state;
    }
}
