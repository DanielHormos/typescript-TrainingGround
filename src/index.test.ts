import 'mocha'
import assert from 'assert'
import { greet, isOld, countOdd, sumEven} from './index'
import { count } from 'console'

describe('ts tests', () => {
  it("get greeting", () => {
    const birthYear = 2000
    const name = 'Daniel'

    const result = greet(name, birthYear)

    assert.strictEqual(result, 'Hello Daniel, you are 24 years old')
  })
  it("returns true if age is above or equal to 35", () => {
    const is34Old = isOld(34)
    const is35Old = isOld(35)
    const is36Old = isOld(36)

    assert.strictEqual(is34Old, false)
    assert.strictEqual(is35Old, true)
    assert.strictEqual(is36Old, true)
  })
  it("fun with variables", () => {
    let name: string = "Marcus"
    let nameImplicit = "Marcus"
    let nameImplicit2 = name

    const cool: boolean = true
    const birthYear = 1972

    assert.strictEqual(typeof cool, "boolean")
    assert.strictEqual(typeof birthYear, "number")
    assert.strictEqual(typeof name, "string")
    assert.strictEqual(typeof nameImplicit, "string")
    assert.strictEqual(typeof nameImplicit2, "string")
  })
  it("arrays are types in ts", () => {
    const names: string[] = ["Marcus", "Daniel", "Jean"]
    const firstFive = [1,2,3,4,5]
    const random = ["array", 2, true]
  })
  it("Count odd numbers", () => {
    const firstFive = [1,2,3,4,5]
    const numberOfOdds = countOdd(firstFive)

    assert.equal(countOdd(firstFive), 3)
  })
  it("Sum up even numbers", () => {
    const num = [1,2,3,4,5,6,7,8,9,10]

    const sum = sumEven(num)

    assert.equal(sum, 5)
  })
})
