'use strict'

const soma = require('./modules/soma')
const subtracao = require('./modules/subtracao')

function calculadora(number) {
	const calc = fn => (...n) => calculadora(fn(...[number].concat(n)))
	const plus = calc(soma)
	const less = calc(subtracao)
	return {number, plus, less}
}

module.exports = calculadora
