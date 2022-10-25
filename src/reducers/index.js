import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';



export const Reducers = combineReducers({
    clickState: clickReducer
})

// relação 1..* = pode possuir 1 reducer ou N reducers;