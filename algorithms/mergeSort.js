const _merge = (a1, a2) => {
  const res = [];
  let i = j = 0;
  while (a1[i] && a2[j]) {
    if (a1[i] >= a2[j])
      res.push(a1[i++]);
    else
      res.push(a2[j++])
  }
  while (a1[i]) res.push(a1[i++]);
  while (a2[j]) res.push(a2[j++]);
  console.log(res);
  return res;
}

const mergeSort = (array) => {
  const mergeSortRec = (array) => {
    const l = 0, r = array.length - 1;
    let merged = array;
    if (l < r) {
      const mid = (l + r) / 2;
      const left = mergeSortRec(array.slice(0, l + 1));
      const right = mergeSortRec(array.slice(-r));
      merged = _merge(left, right);
    }
    return merged;
  }
  return mergeSortRec(array, 0, array.length - 1);
}

function main() {
  const array = [10, 80, 30, 90, 40, 50, 70];
  const sorted = mergeSort(array);
  console.log(`Original ${array}\nvs\nSorted ${sorted}`);
  return sorted;
}
main()

module.exports = mergeSort;