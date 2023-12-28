import { iceCreamSelector } from "../../redux/iceCreamSlice";
import { describe, test, expect } from "vitest";

describe('iceCreamSelector', () => {
  test('should return iceCream state', () => {
    const initialState = { iceCream: [{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }] };
    expect(iceCreamSelector(initialState)).toEqual([{ flavor: 'Chocolate', buckets: 1, scoops: 130, id: 1, image: undefined, price: 4.99 }]);
  });
});