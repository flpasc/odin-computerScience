function sumRange(n) {
	if (n < 1) return 0;
	return n + sumRange(n - 1);
}

console.log("sum Range: " + sumRange(4));

function power(base, expo) {
	if (expo === 0) return 1;
	return base * power(base, expo - 1);
}

console.log("Power: " + power(2, 4));

function factorial(n) {
	if (n === 1) return 1;
	return n * factorial(n - 1);
}

console.log("Factorial: " + factorial(5));

let arr = [1, 2, 3, 10];

function productOfArray(arr) {
	if (arr.length === 0) return 1;
	return arr.shift() * productOfArray(arr);
}

console.log("Product: " + productOfArray(arr));
