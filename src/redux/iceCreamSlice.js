import { createSlice } from '@reduxjs/toolkit';
import chocolate from '../assets/img/chocolate.jpg';
import rockyroad from '../assets/img/rockyroad.jpg';
import cookiesandcream from '../assets/img/cookiesandcream.jpg';
import unicorn from '../assets/img/unicorn.jpg';

const initialState = { 
  iceCream: [
  {
      flavor: 'chocolate',
      buckets: 1,
      scoops: 130,
      id: '1',
      image: chocolate,
      price: 4.99,
  },
  {
      flavor: 'rocky road',
      buckets: 1,
      scoops: 130,
      id: '2',
      image: rockyroad,
      price: 4.99,
  },
  {
      flavor: 'cookies and cream',
      buckets: 1,
      scoops: 130,
      id: '3',
      image: cookiesandcream,
      price: 4.99,
  },
  {
      flavor: 'unicorn',
      buckets: 1,
      scoops: 130,
      id: '4',
      image: unicorn,
      price: 4.99,
  },
],


};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
    reducers: {
      addIceCream: (state, action) => {
          state.push(action.payload);
          console.log(state);
      },
      sellScoop: (state, action) => {
        const { id } = action.payload;
       return state.map((state) => {
          return state.id === id ? { ...state, scoops: state.scoops - 1 } : state;
        });
       
      },
      restockIceCream: (state, action) => {
        const { id } = action.payload;
        return state.map((state) => {
       
          return state.id === id ? { ...state, buckets: state.buckets + 1, scoops: state.scoops + 130 } : state;
        });
      },
  },
});



export const { addIceCream, sellScoop,  restockIceCream } = iceCreamSlice.actions;

export const iceCreamSelector = (state) => state.iceCream;
export default iceCreamSlice.reducer;


// export const selectedIceCreamSelector = (state) => state.selectedIceCream;
