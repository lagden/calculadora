'use strict'

const soma = require('./modules/soma')
const subtracao = require('./modules/subtracao')

function calculadora(total = 0) {
	const calc = fn => (...n) => calculadora(fn(...[total].concat(n)))
	const plus = calc(soma)
	const less = calc(subtracao)
	return {total, plus, less}
}

module.exports = calculadora
