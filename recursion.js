function sumToFoorLoop(n) {
	let sum = 0;
	for (i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function sumToRecursive(n) {
	let sum = 0;
	if (n == 1) return 1;
	return n + sumToRecursive(n - 1);
}

function sumToArithmeticProgression(n) {
	return (n * (n + 1)) / 2;
}

// console.log("foor-loop: " + sumToFoorLoop(3000000000));
// console.log("recursive: " + sumToRecursive(999));
// console.log("arith. progression: " + sumToArithmeticProgression(3000000000000000000000000000000000000));

function fib(n) {
	let prev = 1;
	let prevPrev = 1;

	for (let i = 3; i <= n; i++) {
		let fibo = prev + prevPrev;
		prev = prevPrev;
		prevPrev = fibo;
	}
	return prevPrev;
}

// console.log("fibo: " + fib(77));

// linked lists

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

function printList(list) {
	let tmp = list;

	while (tmp) {
		console.log(tmp.value);
		tmp = tmp.next;
	}
}

printList(list);
