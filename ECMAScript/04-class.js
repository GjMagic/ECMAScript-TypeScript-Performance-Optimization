class Person {
  constructor (name) {
    this.name = name
  }

  say () {
    console.log(`hello this is ${this.name}`)
  }
}

class Student extends Person {

  static create (name, number) {
    return new Student(name, number)
  }

  constructor (name, number) {
    super(name)
    this.number = number
  }

  hello () {
    super.say()
    console.log(`my school number is ${this.number}`)
  }
}

const s = Student.create('lee', '27')
s.hello()