import { iceCreamSelector } from "../../redux/iceCreamSlice";
import { describe, test, expect } from "vitest";

describe('iceCreamSelector', () => {
  const iceCream = [
    { flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 },
    { flavor: 'Rocky Road', buckets: 1, scoops: 130, id: 2, image: undefined, price: 4.99 },
    { flavor: 'Cookies and Cream', buckets: 1, scoops: 130, id: 3, image: undefined, price: 4.99 },
    { flavor: 'Unicorn', buckets: 1, scoops: 130, id: 4, image: undefined, price: 4.99 }];
  test('ice cream selector should return state', () => {
    expect(iceCreamSelector(iceCream)).toEqual([
      { flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 },
      { flavor: 'Rocky Road', buckets: 1, scoops: 130, id: 2, image: undefined, price: 4.99 },
      { flavor: 'Cookies and Cream', buckets: 1, scoops: 130, id: 3, image: undefined, price: 4.99 },
      { flavor: 'Unicorn', buckets: 1, scoops: 130, id: 4, image: undefined, price: 4.99 }]);
  });
});

