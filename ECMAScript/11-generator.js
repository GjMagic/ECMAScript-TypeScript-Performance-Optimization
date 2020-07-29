// Generator 函数-应用

// 发号器

function * creatIdMaker () {
  let id = 1
  while (true) {
    yield id++
  }
}

const idMaker = creatIdMaker()
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())


// 用生成器改造迭代器

const todos = {
  life: ['吃饭', '睡觉', '打豆豆'],
  learn: ['语文', '数学', '英语'],
  work: ['写代码', '喝茶'],

  [Symbol.iterator]: function * () {
    let index = 0
    const all = [...this.life, ...this.learn, ...this.work]
    for (const item of all) {
      yield item
    }
  }
}

for (const item of todos) {
  console.log('11', item)
}