import { createStore } from 'redux';

const data = [];
const myData = (state = { data }, action) => {

   switch (action.type) {
      case 'GET_DATA':
         return {
             data: action.data
         }
          
      default:
         return state;
   }
}

export default () => {
   const store = createStore(myData);

   return store;
}