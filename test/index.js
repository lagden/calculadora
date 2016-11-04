'use strict'

import test from 'ava'
import soma from '../app/modules/soma'
import subtracao from '../app/modules/subtracao'

test('soma', t => {
	const total = soma(2, 3, 4)
	t.is(total, 9)
})

test('subtracao', t => {
	const total = subtracao(2, 3, 4)
	t.is(total, -5)
})
