'use strict'

function subtracao(...numbers) {
	return numbers.reduce((p, c) => p - c)
}

module.exports = subtracao
