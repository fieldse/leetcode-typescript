type KeyMap = { [key: number]: number };

export function twoSum(nums: number[], target: number): number[] {
  const m: KeyMap = {};
  for (let i = 0; i < nums.length; i++) {
    let currentVal = nums[i];
    let wantedVal = target - currentVal;
    // If the wanted value already in the map, return the index pair
    if (wantedVal in m) {
      return [m[wantedVal], i];
    }
    m[currentVal] = i; // Otherwise store index to map
  }
  return [];
}
