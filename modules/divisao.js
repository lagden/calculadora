'use strict'

function divisao(...numbers) {
	return numbers.reduce((p, c) => {
		if (c === 0) {
			return 0
		}
		return p / c
	})
}

module.exports = divisao
