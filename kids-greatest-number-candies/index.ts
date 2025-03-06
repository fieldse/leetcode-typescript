export function kidsWithCandies(
  candies: number[],
  extraCandies: number
): boolean[] {
  const highest = candies.reduce((max, current) => {
    return current > max ? current : max;
  }, 0);
  const result = candies.map((k) => k + extraCandies >= highest);
  return result;
}
