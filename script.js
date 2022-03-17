// Задание 1 метод filter

function myFilter(arr, callback, thisArg) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    const callbackThis = callback.call(thisArg, arr[i], i, arr);

    if (callbackThis) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

// Задание 2 метод forEach

function myForEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(thisArg, arr[i], i, arr);
  }
}

// Задание 3 метод reduce

function myReduce(arr, callback, initial) {
  let accum = initial;

  for (let i = 0; i < arr.length; i++) {
    accum = callback(accum, arr[i], i, arr);
  }

  return accum;
}