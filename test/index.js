'use strict'

import test from 'ava'
import soma from '../app/modules/soma'
import subtracao from '../app/modules/subtracao'
import calculadora from '../app/calculadora'

test('soma', t => {
	const total = soma(2, 3, 4)
	t.is(total, 9)
})

test('subtracao', t => {
	const total = subtracao(2, 3, 4)
	t.is(total, -5)
})

test('calculadora', t => {
	const calc = calculadora().plus(5, 5).less(7)
	t.is(calc.total, 3)
})
