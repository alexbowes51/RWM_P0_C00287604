import { describe,it,expect } from "vitest";
import { combinedFilter } from "./combined";

describe('combined (peer → mine)', () => {
  it('basic sequence', () => {
    const input = [1, 3, 5, 7, 9];
    // Update expected for your two filters & agreed order
    const expected = [0, 0, 0, 0, 0];
    expect(combinedFilter(input)).toEqual(expected);
  });

  it('edge cases', () => {
    expect(combinedFilter([])).toEqual([]);
  });
});
