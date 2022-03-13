// Задание 1 метод filter

function myFilter(arr, callback) {
  const filtered = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) {
      filtered.push(arr[i])
    }
  }
  return filtered
}

// Задание 2 метод map

function myMap(arr, callback) {
  const mapped = []
  for(let i = 0; i < arr.length; i++) mapped.push(callback(arr[i], i, arr))
  return mapped
}

// Задание 3 метод reduce

function myReduce(arr, callback, initial) {
  let accum = initial;
  for(let i = 0; i < arr.length; i++) {
      accum = callback(accum, arr[i], i, arr);
  }
  return accum;
}
