import { updateObject } from './index';
import {
    GET_TEST_DATA
} from "../actions/types";

const initialState = {
    testReducer: null,
};

export default (state = initialState, action) => {
    //console.log('action payload----------', action.payload);
    switch (action.type) {
        case GET_TEST_DATA: {
            const result = action.payload;
            return updateObject(
                state, {
                testReducer: result.data
                }
            );
        }
        default:
            return state;
     }
 };  
