import { assert } from 'chai'
import Laggyload from '../src'

describe('Laggyload test.', () => {
    it('should test Laggyload function', () => {
        const expectedVal = ''
        assert(Laggyload('.async', 1000) === expectedVal, ':(')
    })
})
