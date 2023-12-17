import { describe, test, expect } from "vitest";
import iceCreamReducer, { addIceCream, sellScoop, restockIceCream } from '../../redux/iceCreamSlice.js';

describe('iceCreamSlice', () => {

  test('addIceCream should add iceCream to initial State', () => {
    const initialState = [];
    const newIceCream = { flavor: 'Strawberry', buckets: 1, scoops: 50, id: 3, image: undefined, price: 4.99 };
    
    expect(iceCreamReducer(initialState, addIceCream(newIceCream))).toEqual([{ flavor: 'Strawberry', buckets: 1, scoops: 50, id: 3, image: undefined, price: 4.99 }]);
  });
  test('sellScoop should decrease scoop of selected flavor by 1', () => {
    const initialState = [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }];
    const flavorToSell = 'Chocolate';
    const updatedState = iceCreamReducer(initialState, sellScoop(flavorToSell));
    expect(updatedState).toEqual([{ flavor: 'Chocolate', buckets: 1, scoops: 129, id: 1, image: undefined, price: 4.99 }]);
  });
});
