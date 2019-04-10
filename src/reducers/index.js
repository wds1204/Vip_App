'use strict';
import {combineReducers} from 'redux'
import FitnessReducer from './FitnessReducer'
const rootReducer =combineReducers({
    fitness:FitnessReducer
});

export default rootReducer;
