import axios from 'axios';
import {
    GET_TEST_DATA,
    BASE
} from './types';

export function getTestData() {
    const request = axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
    return {
        type: GET_TEST_DATA,
        payload: request
    };
}