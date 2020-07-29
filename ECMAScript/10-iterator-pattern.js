// 迭代器设计模式

// 场景：协调开发一个任务清单应用

const todos = {
  life: ['吃饭', '睡觉', '打豆豆'],
  learn: ['语文', '数学', '英语'],
  work: ['写代码', '喝茶'],

  [Symbol.iterator]: function () {
    let index = 0
    const all = [...this.life, ...this.learn, ...this.work]

    return {
      next: function () {
        return {
          value: all[index],
          done: index++ >= all.length
        }
      }
    }
  }
}

for (const item of todos) {
  console.log(item)
}