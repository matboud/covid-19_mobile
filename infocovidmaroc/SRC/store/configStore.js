import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const data = [0];
const total = {};
const infectionsArray = [];
const deaths = [];
const recoveries = [];
const dates = [];
const grouped = [];

const myData = (state = { data, total, infectionsArray, deaths, recoveries, dates, grouped }, action) => {
   switch (action.type) {
      case 'GET_DATA':
         return {
             data: action.data,
             total: action.total,
             infectionsArray: action.infectionsArray,
             deaths: action.deaths,
             recoveries: action.recoveries,
             dates: action.dates,
             grouped: action.grouped
         }
      default:
         return state;
   }
}

export default () => {
   const store = createStore(myData, {}, applyMiddleware(reduxThunk));

   return store;
}