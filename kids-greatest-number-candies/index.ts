export function kidsWithCandies(
  candies: number[],
  extraCandies: number
): boolean[] {
  const highest = candies.reduce((max, current) => {
    return current > max ? current : max;
  }, 0);
  return candies.map((k) => {
    return k + extraCandies >= highest;
  });
}
