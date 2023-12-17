import { createSlice } from '@reduxjs/toolkit';
import chocolate from '../images/chocolate.jpg';
import rockyroad from '../images/rockyroad.jpg';
import cookiesandcream from '../images/cookiesandcream.jpg';
import unicorn from '../images/unicorn.jpg';

const initialState = {
  iceCreams: [ {
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
},],
// selectedIceCream: null,
};

const iceCreamSlice = createSlice({
  name: 'iceCreams',
  initialState,
  reducers: {
    addIceCream: (state, action) => {
      state.iceCreams.push(action.payload);
    },
    showSelectedIceCream: (state, action) => {
      return {
        selectedIceCream: state.iceCreams.find(
          (iceCream) => iceCream.id === action.payload
        ),
      };
    },
    sellScoop: (state) => {
  const updatedIceCreams = state.iceCreams.map((iceCream) =>
  iceCream.id === state.selectedIceCream.id
    ? { ...iceCream, scoops: Math.max(0, iceCream.scoops - 1) }
    : iceCream
);

return {
  ...state,
  iceCreams: updatedIceCreams,
  selectedIceCream: updatedIceCreams.find(
    (iceCream) => iceCream.id === state.selectedIceCream.id
  ),
};
},
  },
});

export const { addIceCream, sellScoop, showSelectedIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
export const iceCreamSelector = (state) => state.iceCream;