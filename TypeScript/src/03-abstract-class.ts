// 抽象类：只能继承，不能new

abstract class Animal {
  eat (food: string): void {
    console.log(`${food}`)
  }

  abstract run (distance: number): void
}

class Dog extends Animal {
  run (distance: number) {
    console.log(distance)
  }
}

const d = new Dog()
d.eat('万科')
d.run(100)
// const a = new Animal()