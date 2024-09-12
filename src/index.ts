const greet = (name: string, birthYear: number) => {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

const greetPeople = (greeting: string, ...names: string[]) => {
    return `${greeting} ${names.join(" and ")}`.trim()
}

const isOld = (age: number) => age >= 35

const countOdd = (arr: number[]) => arr.filter((num) => num % 2 !== 0).length

const sumEven = (arr: number[]) =>
    arr
    .filter((num) => num % 2 === 0)
    .reduce((accumulator, current) => accumulator + current
    /*you can add ", 0" for initial value */ )


const getPersonStreetNo = (p: Person) => p.address.streetNo;

const getPersonNameString = (p: IPerson) => `${p.name}, ${p.birthYear.toString()}`


const printThis = (p: Person | undefined | null) => {
    if(!p){
        return "no person supplied"
    }
    return p.name
}

const optionallyAdd = (
    num1: number, 
    num2: number, 
    num3: number = 0, 
    num4: number = 0, 
    num5: number = 0) => {
        return num1 + num2 + num3 + num4 + num5
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



export { greet , isOld, countOdd, sumEven, getPersonStreetNo, getPersonNameString, printThis, optionallyAdd, greetPeople, 
    Address, Person, PersonClass, EmployeeClass, IPerson};
