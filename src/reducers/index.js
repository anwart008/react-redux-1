import changeTheNumber from './upDown';
import multTheNumber from './mulDiv'
import {combineReducers} from 'redux';

const reducers = combineReducers({
    changeTheNumber,
    multTheNumber
});

export default reducers;
