//
// Unique Sort
//

// A simple sorting algorithm that should not return any duplicate values in the sorted array.

const uniqueSort = function(arr) {
  const breadcrumbs = {};
  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
    if (!breadcrumbs[arr[i]]) {
        result.push(arr[i]);
        breadcrumbs[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
}

uniqueSort([6,4,4,7,1,1,1,10,10]) // [ 1, 4, 6, 7, 10 ]