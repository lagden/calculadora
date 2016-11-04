'use strict'

function soma(...numbers) {
	return numbers.reduce((p, c) => p + c)
}

module.exports = soma
