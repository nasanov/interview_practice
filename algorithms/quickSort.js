const defaultCmp = (a, b) => a - b;

const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

const _partition = (array, low, high, cmp) => {
  const pivot = array[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (cmp(array[j], pivot) <= 0)
      swap(array, ++i, j);
  }
  swap(array, i + 1, high);
  return i + 1;
}

const quickSort = (array, cmp = defaultCmp) => {
  const quickSortRec = (low, high) => {
    if (low < high) {
      console.log(`Working on ${array.slice(low, high + 1)}`);
      const pi = _partition(array, low, high, cmp);

      quickSortRec(low, pi - 1);
      quickSortRec(pi + 1, high);
    }
  }

  quickSortRec(0, array.length - 1);
}

function main() {
  const array = [10, 80, 30, 90, 40, 50, 70];
  quickSort(array);
  console.log(array);
}
main();

module.exports = quickSort