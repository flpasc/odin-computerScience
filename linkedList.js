class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

const LinkedList = () => {
	let head = null;

	const append = (value) => {
		let newNode = new Node(value);

		if (head === null) {
			head = newNode;
		} else {
			let pointer = head;
			while (pointer.nextNode !== null) {
				pointer = pointer.nextNode;
			}
			pointer.nextNode = newNode;
		}
	};

	const size = () => {
		let counter = 0;
		let pointer = head;
		while (pointer.nextNode !== null) {
			counter++;
			pointer = pointer.nextNode;
		}
		counter++;
		return counter;
	};

	const prepend = (value) => {
		let newNode = new Node(value, head);
		let head = newNode;
	};

	const at = (index) => {
		let pointer = head;
		for (let i = 0; i < index; i++) {
			pointer = pointer.nextNode;
		}
		return pointer;
	};

	const tail = () => {
		let pointer = head;
		while (pointer.nextNode != null) {
			pointer = pointer.nextNode;
		}
		return pointer;
	};

	const pop = () => {
		let pointer = head;
		let lastPointer;

		while (pointer.nextNode !== null) {
			lastPointer = pointer;
			pointer = pointer.nextNode;
		}
		lastPointer.nextNode = null;
		return pointer;
	};

	const contains = (value) => {
		let pointer = head;
		while (pointer !== null) {
			if (pointer.value === value) return true;
			pointer = pointer.nextNode;
		}
		return false;
	};

	const find = (value) => {
		let pointer = head;
		let index = 0;
		while (pointer.nextNode !== null) {
			if (pointer.value === value) {
				return index;
			} else {
				pointer = pointer.nextNode;
				index++;
			}
		}
		if (pointer.value === value) return index;
		return "not found";
	};

	const toString = () => {
		let pointer = head;
		let string = "";
		while (pointer.nextNode !== null) {
			string += `( ${pointer.value} ) => `;
			pointer = pointer.nextNode;
		}
		string += " " + pointer.value;
		return string;
	};

	const insertAt = (value, index) => {
		if (index === 0) {
			prepend(value);
			return;
		}
		const prevNode = at(index - 1);
		const newNode = new Node(value, prevNode.newNode);
		prevNode.newNode = newNode;
	};

	const removeAt = (index) => {
		if (index === 0) {
			head = head.nextNode;
			return;
		}
		const prevNode = at(index - 1);
		prevNode.nextNode = prevNode.nextNode.nextNode;
	};

	return {
		append,
		prepend,
		size,
		at,
		tail,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,
	};
};

let list = LinkedList();
list.append(1);
list.append(3);
list.append(4);
list.append(88);
list.append(7);
list.append(9292);
list.append(34);
list.append(58);
list.append(245);
console.log(list.at(3));

console.log(list.contains(3));
console.log(list.find(3));
console.log(list.toString());
console.log(list.size());
