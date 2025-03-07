export function removeElement(nums: number[], val: number): number {
  let n = 0;
  nums.map((x, i) => {
    if (x === val) {
      nums[i] = 99; // replacing this moves it to the end of the list at sort time
    } else {
      n++;
    }
  });
  nums.sort();
  return n;
}
