import { iceCreamSelector } from "../../redux/iceCreamSlice";
import { describe, test, expect } from "vitest";

const state = { 
  iceCream: [ 
  { flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 },
 { flavor: 'Rocky Road', buckets: 1, scoops: 130, id: 2, image: undefined, price: 4.99 }, 
 { flavor: 'Cookies and Cream', buckets: 1, scoops: 130, id: 3, image: undefined, price: 4.99 }, 
 { flavor: 'Unicorn', buckets: 1, scoops: 130, id: 4, image: undefined, price: 4.99 } ]};

 describe('iceCreamSelector', () => {
  test('should return all iceCreams', () => {
  const iceCreamList = iceCreamSelector(state);
    expect(iceCreamList).toEqual([ 
      { flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 },
     { flavor: 'Rocky Road', buckets: 1, scoops: 130, id: 2, image: undefined, price: 4.99 }, 
     { flavor: 'Cookies and Cream', buckets: 1, scoops: 130, id: 3, image: undefined, price: 4.99 }, 
     { flavor: 'Unicorn', buckets: 1, scoops: 130, id: 4, image: undefined, price: 4.99 } ]);
  });
});