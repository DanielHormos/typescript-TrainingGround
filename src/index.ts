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

function getPersonStreetNo(p: Person): number{
    return p.address.streetNo;
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

export { greet , isOld, countOdd, sumEven, getPersonStreetNo, Address, Person};
