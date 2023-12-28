import { describe, test, expect } from "vitest";
import iceCreamReducer, { addIceCream, sellScoop, restockIceCream, selectedFlavor } from '../../redux/iceCreamSlice.js';
import iceCreamSlice from "../../redux/iceCreamSlice.js";

describe('iceCreamSlice', () => {
  test('selectedFlavor should set selected to true', () => {
    expect(iceCreamReducer([{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }], { type: 'iceCream/selectedFlavor', payload: { id: 1 } })).toEqual([{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99, selected: true }]);
  })

  test('addIceCream should add iceCream to initial State', () => {
    const initialState = [];
    const iceCream = { flavor: 'Strawberry', buckets: 1, scoops: 50, id: 3, image: undefined, price: 4.99 };
    
    expect(iceCreamReducer(initialState, addIceCream(iceCream))).toEqual([{ flavor: 'Strawberry', buckets: 1, scoops: 50, id: 3, image: undefined, price: 4.99 }]);
  });
  test('sellScoop should decrease scoop of selected flavor by 1', () => {
    const  state = [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }];
    const selectedIceCream = {id: 1};
    const updatedState = iceCreamSlice(state, sellScoop(selectedIceCream));
    expect(updatedState).toEqual([{ flavor: 'Chocolate', buckets: 1, scoops: 129, id: 1, image: undefined, price: 4.99 }]);
  });
  test('restockIceCream should increase buckets of selected flavor by 1', () => {
    const state = [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }];
    const selectedIceCream = {id: 1}; 
    const updatedState = iceCreamSlice(state, restockIceCream(selectedIceCream));
    expect(updatedState).toEqual([{ flavor: 'Chocolate', buckets: 2, scoops: 260, id: 1, image: undefined, price: 4.99 }]);
  });

})

