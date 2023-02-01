function fibonacci(n) {
	let fib = [0, 1];
	if (n < 1) fib = [];
	if (n > 1 && n < 2) fib = [0];
	for (let i = 0; i < n - 2; i++) {
		let newFib = fib[fib.length - 1] + fib[fib.length - 2];
		fib.push(newFib);
	}
	return fib;
}

function fibsRec(n) {
	if (n < 2) return n;
	return fibsRec(n - 1) + fibsRec(n - 2);
}

console.log(fibsRec(8));
