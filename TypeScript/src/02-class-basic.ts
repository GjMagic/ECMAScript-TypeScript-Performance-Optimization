
class Person {
  public name: string
  private age: number
  protected readonly gender: boolean

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi (msg: string) {
    console.log(`i am ${this.name}, ${msg}`)
    console.log(this.age)
  }
}

class Student extends Person {
  static create (name: string, age: number) {
    return new Student(name, age)
  }

  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }
}

const tom = new Person('tom', 18)
console.log(tom.name)
// console.log(tom.age)
// console.log(tom.gender)

const jack = Student.create('jack', 18)
console.log(jack)