function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

function isOld(age: number) {
        return age >= 35
}

function countOdd(arr: number[]): number{
    return arr.filter((num) => num % 2 !== 0).length
}

function sumEven(arr: number[]): number{
    return arr
    .filter((num) => num % 2 === 0)
    .reduce((accumulator, current) => accumulator + current/*you can add ", 0" for initial value */ )
}

function getPersonStreetNo(p: Person){
    return p.address.streetNo;
}

function getPersonNameString(p: IPerson){
    return p.name + ", " + p.birthYear
}

function printThis(p: Person | undefined | null){
    if(!p){
        return "no person supplied"
    }
    return p.name
}

type Address = {
    street: string
    streetNo: number
    city: string
}
  
type Person = {
    name: string
    birthYear: number
    address: Address
}

class PersonClass {
    private name: string = ""
    birthYear: number = 1970

    constructor(name: string, birthYear: number){
        this.name = name
        this.birthYear = birthYear
    }

    getName() {
        return this.name
    }
}

class EmployeeClass extends PersonClass {
    employeeId: number = -1
}

interface IPerson{
    name: string
    birthYear: number
}



export { greet , isOld, countOdd, sumEven, getPersonStreetNo, getPersonNameString, printThis, 
    Address, Person, PersonClass, EmployeeClass, IPerson};
