import { createStore } from 'redux';

const data = [];
const myData = (state = { data }, action) => {
   switch (action.type) {

      case 'GET_DATA':
         console.log('im in the return of GETDATA')
         return data;
      default:
         return state;
   }
}

export default () => {
   const store = createStore(myData);

   return store;
}