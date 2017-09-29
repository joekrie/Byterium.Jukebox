const { test } = require('ava')

test('can arrays be equal?', t => {
    t.deepEqual([1, 2], [1, 2])
})