import { combineReducers } from 'redux';
import TestReducer from './reducer_test';



export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}
export function updateArray(oldObject, newValues) {
  return Object.assign([], oldObject, newValues);
}

const rootReducer = combineReducers({
  test: TestReducer
});

export default rootReducer;
