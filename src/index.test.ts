import 'mocha'
import assert from 'assert'
import { greet, isOld } from './index'

describe('ts tests', () => {
  it('get greeting', () => {
    const birthYear = 2000
    const name = 'Daniel'

    const result = greet(name, birthYear)

    assert.strictEqual(result, 'Hello Daniel, you are 24 years old')
  })
  it('returns true if age is above or equal to 35', () => {
    const is34Old = isOld(34)
    const is35Old = isOld(35)
    const is36Old = isOld(36)

    assert.strictEqual(is34Old, false)
    assert.strictEqual(is35Old, true)
    assert.strictEqual(is36Old, true)
  })
})
