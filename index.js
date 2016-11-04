'use strict'

const soma = require('./modules/soma')
const subtracao = require('./modules/subtracao')
const multiplicacao = require('./modules/multiply')

function calculadora(total = 0) {
	const calc = fn => (...n) => calculadora(fn(...[total].concat(n)))
	const plus = calc(soma)
	const less = calc(subtracao)
	const mult = calc(multiplicacao)
	return {total, plus, less, mult}
}

module.exports = calculadora
