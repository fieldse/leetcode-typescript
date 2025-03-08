export function twoSum(nums: number[], target: number): number[] {
  const m = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let needed = target - val; // get index of matching set, if exists in the map
    // If the wanted value already in the map, return the index pair
    if (m.has(needed)) {
      return [m.get(needed)!, i]; // ! means this will not be null; TS operator
    }
    m.set(val, i); // Otherwise store index to map
  }
  return [];
}
