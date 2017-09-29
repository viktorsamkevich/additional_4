module.exports = function multiply(first, second) {
	// your solution
	let arrayNumbers = [];
	let i = 0;
	let firstNumbers = first.split('').reverse();
	let secondNumbers = second.split('').reverse();
	let arrayNumbersult;

	while (i < firstNumbers.length) {
		for (let j = 0; j < secondNumbers.length; j++) {
			let making = firstNumbers[i] * secondNumbers[j];
			if (arrayNumbers[i + j] !== undefined) {
				arrayNumbers[i + j] += making;
			} else {
				arrayNumbers[i + j] = making;
			}
		}
		i++;
	}

	for (let i = 0; i < arrayNumbers.length; i++) {
		let num = arrayNumbers[i] % 10;
		let limit = Math.floor(arrayNumbers[i] / 10);
		arrayNumbers[i] = num;

		if (arrayNumbers[i + 1] !== undefined) {
			arrayNumbers[i + 1] += limit;
		} else if (limit !== 0){
			arrayNumbers[i + 1] = limit;
		}
	}

	arrayNumbersult = arrayNumbers.reverse().join('');
	return arrayNumbersult;
}
