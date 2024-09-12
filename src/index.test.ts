import 'mocha'
import assert from 'assert'
import { greet, isOld, countOdd, sumEven, getPersonNameString,
     Person, getPersonStreetNo, PersonClass, EmployeeClass,
     IPerson, printThis, optionallyAdd, greetPeople} from './index'
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

    assert.equal(sum, 30)
  })
  it("gets the street number for a person", () => {
    const p: Person = {
        name: "Marcus",
        birthYear: 1973,
        address: {
            street: "strålgatan",
            streetNo: 23,
            city: "stockholm"
        }
    }

    const streetNo = getPersonStreetNo(p)

    assert.equal(streetNo, 23)
  })
  it("using classes", () => {
    const p = new PersonClass("Daniel", 2000)
    const e = new EmployeeClass("Jean", 2000)

    e.employeeId = 12345

    assert.strictEqual(p.getName(), "Daniel")
    assert.strictEqual(e.getName(), "Jean")
    assert.strictEqual(e.employeeId, 12345)
  })
  it("prints an IPerson", () => {
    const p1: IPerson = {name: "Marcus", birthYear: 1972}
    const p2 = {name: "David", birthYear: 1975, drummer: true}

    const p1Address = getPersonNameString(p1)
    const p2Address = getPersonNameString(p2)

    assert.strictEqual(p1Address, "Marcus, 1972")
    assert.strictEqual(p2Address, "David, 1975")
  })
  it("uses union types to allow null", () => {
    const result1 = printThis(undefined)
    const result2 = printThis(null)

    assert.strictEqual(result1, "no person supplied")
    assert.strictEqual(result2, "no person supplied")
  })
  it("optional parameters", () => {
    const sum = optionallyAdd(1,2,3,4,5)

    assert.strictEqual(sum, 15)
  })
  it("rest parameters - print names", () => {
    const greeting1 = greetPeople("Hello")
    const greeting2 = greetPeople("Hello", "Marcus")
    const greeting3 = greetPeople("Hello", "Marcus", "Dasha")
    const greeting4 = greetPeople("Hello", "Marcus", "Dasha", "David")
    const greeting5 = greetPeople(
        "Hello", 
        "Marcus", 
        "Dasha", 
        "David", 
        "Julia", 
        "Wietse", 
        "Lucas"
    )

    assert.strictEqual(greeting1, "Hello")
    assert.strictEqual(greeting2, "Hello Marcus")
    assert.strictEqual(greeting3, "Hello Marcus and Dasha")
    assert.strictEqual(greeting4, "Hello Marcus and Dasha and David")
    assert.strictEqual(greeting5, "Hello Marcus and Dasha and David and Julia and Wietse and Lucas")
  })
})
