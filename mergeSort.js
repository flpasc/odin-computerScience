const mergeSort = (arr) => {
	if (arr.length < 2) return arr;

	let midPoint = Math.floor(arr.length / 2);
	let leftArray = mergeSort(arr.slice(0, midPoint));
	let rightArray = mergeSort(arr.slice(midPoint));
	return merge(leftArray, rightArray);
};
const merge = (leftArray, rightArray) => {
	const sortedArray = [];

	while (leftArray.length > 0 && rightArray.length > 0) {
		const arrayMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
		const sortElement = arrayMin.shift();

		sortedArray.push(sortElement);
	}
	return sortedArray.concat(leftArray, rightArray);
};

let array = [23, 82, 06, 37, 94, 58, 52, 16, 12, 11, 40, 36, 85, 35];
console.log(mergeSort(array));
