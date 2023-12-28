import { createSlice } from '@reduxjs/toolkit';
import chocolate from '../assets/img/chocolate.jpg';
import rockyroad from '../assets/img/rockyroad.jpg';
import cookiesandcream from '../assets/img/cookiesandcream.jpg';
import unicorn from '../assets/img/unicorn.jpg';

const initialState =  [
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
          console.log(state);
      },
      selectedFlavor: (state, action) => {
        const { id } = action.payload;
        return state.map((item) => {
          return item.id === id ? { ...item, selected: true } : item;
        });
      },
      sellScoop: (state, action) => {
        const { id } = action.payload;
    
       return state.map((item) => {
          return item.id === id ? { ...item, scoops: item.scoops - 1 } : item;
        });
      },
      restockIceCream: (state, action) => {
        const { id } = action.payload;
        return state.map((item) => {
        return item.id === id ? { ...item, buckets: item.buckets + 1, scoops: item.scoops + 130 } : item;
        });
      },
 
  },
});



export const { addIceCream, sellScoop,  restockIceCream, selectedFlavor } = iceCreamSlice.actions;

export const iceCreamSelector = (state) => state.iceCream;
console.log(iceCreamSelector);
export default iceCreamSlice.reducer;
