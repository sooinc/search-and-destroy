'use strict';

// Complete this algo

const split = function(array) {
  let midPointIndex = Math.floor(array.length / 2);

  let firstHalf = array.slice(0, midPointIndex);
  let secondHalf = array.slice(midPointIndex);

  return [firstHalf, secondHalf];
};

const binarySearch = (array, target) => {
  let splitArr = split(array);
  let firstHalf = splitArr[0];
  let secondHalf = splitArr[1];
  console.log('firsthalf:', firstHalf);
  console.log('secondhalf:', secondHalf);

  if (target === secondHalf[0] || target === firstHalf[0]) {
    return true;
  } else {
    if (firstHalf.includes(target)) {
      return binarySearch(firstHalf, target);
    } else if (secondHalf.includes(target)) {
      return binarySearch(secondHalf, target);
    } else {
      return false;
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;

// if (target < secondHalf[0]) {
// 	return binarySearch(firstHalf, target);
//   } else if (target > secondHalf[0]) {
// 	return binarySearch(secondHalf, target);
//   } else {
// 	return false;
//   }
