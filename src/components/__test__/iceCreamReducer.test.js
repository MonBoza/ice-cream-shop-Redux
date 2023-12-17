import { describe, test, expect } from "vitest";
import iceCreamReducer, { addIceCream, sellScoop, restockIceCream } from '../../redux/iceCreamSlice.js';

describe('iceCreamSlice', () => {

  test('addIceCream should add iceCream to initial State', () => {
    const initialState = [];
    const iceCream = { flavor: 'Strawberry', buckets: 1, scoops: 50, id: 3, image: undefined, price: 4.99 };
    
    expect(iceCreamReducer(initialState, addIceCream(iceCream))).toEqual([{ flavor: 'Strawberry', buckets: 1, scoops: 50, id: 3, image: undefined, price: 4.99 }]);
  });
  test('sellScoop should decrease scoop of selected flavor by 1', () => {
    const  state = [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }];
    const selectedIceCream = {id: 1};
    const updatedState = iceCreamReducer(state, sellScoop(selectedIceCream));
    expect(updatedState).toEqual([{ flavor: 'Chocolate', buckets: 1, scoops: 129, id: 1, image: undefined, price: 4.99 }]);
  });
  test('restockIceCream should increase buckets of selected flavor by 1', () => {
    const state = [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }];
    const selectedIceCream = {id: 1}; 
    expect(iceCreamReducer(state, restockIceCream(selectedIceCream))).toEqual([{ flavor: 'Chocolate', buckets: 2, scoops: 260, id: 1, image: undefined, price: 4.99 }]);
  });
  });
