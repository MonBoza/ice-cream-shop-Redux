import { createSlice } from '@reduxjs/toolkit';
import chocolate from '../assets/img/chocolate.jpg';
import rockyroad from '../assets/img/rockyroad.jpg';
import cookiesandcream from '../assets/img/cookiesandcream.jpg';
import unicorn from '../assets/img/unicorn.jpg';

const initialState = { iceCream: [
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
]};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState: initialState,
  reducers: {
      addIceCream: (state, action) => {
          state.push(action.payload);
      },
      sellScoop: (state, action) => {
        const { id } = action.payload;
       return state.map((iceCream) => {
          return iceCream.id === action.payload.id ? { ...iceCream, scoops: iceCream.scoops - 1 } : iceCream;
        });
      },
      restockIceCream: (state, action) => {
        const { id } = action.payload;
        return state.map((iceCream) => {
          console.log(iceCream);
          return iceCream.id === id ? { ...iceCream, buckets: iceCream.buckets + 1, scoops: iceCream.scoops + 130 } : iceCream;
        });
      },
  },
});


export const { addIceCream, sellScoop,  restockIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
export const iceCreamSelector = (state) => state.iceCream;