import { CLICK_UPDATE_VALUE } from "../actions/actionTypes";

const initialSt = {
    newValue: ''
};

export const clickReducer = (state = initialSt, action) => {

    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state, newValue: action.newValue
            };
        default:
            return state;
    }
};