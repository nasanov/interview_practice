const defaultCmp = (a, b) => a - b;

const mergeSortRec = (array, l, r, cmp) => {
  const _merge = (main, k, a1, a2) => {
    let i = j = 0;
    while (a1[i] && a2[j]) {
      main[k++] = cmp(a1[i], a2[j]) >= 0 ? a1[i++] : a2[j++];
    }
    while (a1[i]) main[k++] = a1[i++];
    while (a2[j]) main[k++] = a2[j++];
  }

  if (l < r) {
    const mid = Math.floor((l + r) / 2);
    mergeSortRec(array, l, mid, cmp);
    mergeSortRec(array, mid + 1, r, cmp);
    merged = _merge(array, l, array.slice(l, mid + 1), array.slice(mid + 1, r + 1));
  }
}

const mergeSort = (array, cmp = defaultCmp) => {
  return mergeSortRec(array, 0, array.length - 1, cmp);
}

function main() {
  const array = [38, 27, 43, 3, 9, 82, 10];
  const cpy = [...array];
  mergeSort(cpy);
  console.log(`Original ${array}\nvs\nSorted ${cpy}`);
}
main()

module.exports = mergeSort;