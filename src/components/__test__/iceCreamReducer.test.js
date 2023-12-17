import { describe, test, expect } from "vitest";
import iceCreamReducer, { addIceCream, sellScoop, showSelectedIceCream } from '../../redux/iceCreamSlice.js';

describe('iceCreamSlice', () => {
  test('addIceCream should add another iceCream To the List of iceCreams', () => {
    const initialState = { iceCreams: [] };
    const newIceCream = { flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 };
    expect(iceCreamReducer(initialState, addIceCream(newIceCream))).toEqual({ iceCreams: [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }] });
  });
  test('showSelectedIceCream should set the selectedIceCream to the iceCream with the matching id', () => {
    const initialState = { iceCreams: [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }] };
    expect(iceCreamReducer(initialState, showSelectedIceCream(1))).toEqual({selectedIceCream:{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }});

  });
  test('sellScoop should decrease the number of scoops of selected flavor by 1', () => {
    const initialState = {
      iceCreams: [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }]
    };
    const flavorToSell = 'Chocolate';
    expect(iceCreamReducer(initialState, sellScoop(flavorToSell))).toBe({flavorToSell:[{ flavor: 'Chocolate', buckets: 1, scoops: 129, id: 1, image: undefined, price: 4.99 }]});
  });
});

