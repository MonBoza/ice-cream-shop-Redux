import { createSlice } from '@reduxjs/toolkit';
import chocolate from '../assets/img/chocolate.jpg';
import rockyroad from '../assets/img/rockyroad.jpg';
import cookiesandcream from '../assets/img/cookiesandcream.jpg';
import unicorn from '../assets/img/unicorn.jpg';

const initialState = [
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
];

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
      addIceCream: (state, action) => {
          state.push(action.payload);
      },
      sellScoop: (state, action) => {
        const iceCream = state.find(item => item.id === action.payload.id);
        if (iceCream) {
          iceCream.scoops -= 1;
          iceCream.buckets = iceCream.scoops < 130 ? 0 : iceCream.buckets;
        }
      },
      restockIceCream: (state, action) => {
          const iceCream = state.find(item => item.id === action.payload.id);
          if (iceCream) {
              iceCream.buckets += 1;
              iceCream.scoops += 130;
          }
      },
  },
});


export const { addIceCream, sellScoop,  restockIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
export const iceCreamSelector = (state) => state.iceCream;