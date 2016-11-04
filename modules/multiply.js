'use strict'

function multiply(...numbers) {
	return numbers.reduce((p, c) => p * c)
}

module.exports = multiply
