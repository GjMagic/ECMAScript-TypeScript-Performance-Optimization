console.log(Array(5).fill(100))

function createArr<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

const res = createArr<string>(3, 'str')
console.log(res)