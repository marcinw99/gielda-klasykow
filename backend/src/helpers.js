/*
["900", "9-3", "9-3", "9-5", "9-3", "9000", "9-3", "9-5"]
-->
[ { value: '9-3', count: 4 },
  { value: '9-5', count: 2 },
  { value: '900', count: 1 },
  { value: '9000', count: 1 } ] */
export function getOccurrencesOfValuesInArray(arr) {
  var array = arr.sort(),
    occurrencesCount = [],
    prev;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== prev) {
      occurrencesCount.push({
        value: array[i],
        count: 1
      });
    } else {
      occurrencesCount[occurrencesCount.length - 1]["count"]++;
    }
    prev = array[i];
  }
  return occurrencesCount;
}
