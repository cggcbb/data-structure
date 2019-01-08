/*
 * @Description: 队列是一种线性结构, 相比数组, 队列对应的操作是数组的子集, 只能从一端添加数据, 也只能从另一端取出数据(FIFO)
 * @Author: cggcbb
 * @Date: 2019-01-08 16:10:40
 * @LastEditTime: 2019-01-08 17:24:51
 */
import myArray from '@/assets/js/array'

// 数组队列
const ArrayQueue = class {
  constructor(capacity = 10) {
    this.array = new myArray(capacity)
  }
  getSize() {
    return this.array.getSize()
  }
  isEmpty() {
    return this.array.isEmpty()
  }
  getCapacity() {
    return this.array.getCapacity()
  }
  enqueue(element) {
    this.array.addLast(element)
  }
  dequeue() {
    return this.array.removeFirst()
  }
  getFront() {
    return this.array.getFirst()
  }
  toString() {
    let size = this.getSize()
    let data = 'front ['
    for (let i = 0; i < size; i++) {
      data += `${this.array.get(i)}`
      if (!Object.is(i, size - 1)) {
        data += `, `
      }
    }
    data += '] tail'
    return `ArrayQueue: size = ${size}, capacity = ${this.getCapacity()}, data = ${data}`
  }
}

// 循环队列
const LoopQueue = class {
  constructor(capacity = 10) {
    this.data = new myArray(capacity + 1)
    this.front = 0
    this.tail = 0
    this.size = 0
  }
  getSize() {
    return this.size
  }
  getCapacity() {
    return this.data.length - 1
  }
  isEmpty() {
    return Object.is(this.front, this.tail)
  }
  isFull() {
    return Object.is(this.front, (this.tail + 1) % this.data.length)
  }
  enqueue(element) {
    if (this.isFull()) {
      this._resize(this.data.length * 2)
    }
    this.data[this.tail] = element
    this.tail = (this.tail + 1) % this.data.length
    this.size ++
  }
  dequeue() {
    if (this.isEmpty()) {
      return new Error('Cannot dequeue from an empty queue')
    }
    let ret = this.data[this.front]
    this.data[this.front] = null
    this.front = (this.front + 1) % this.data.length
    this.size --
    if (Object.is(this.size, this.data.length / 3 | 0) && this.data.length / 2) {
      this._resizeArray(this.data.length / 2)
    }
    return ret
  }
  getFront() {
    if (this.isEmpty()) {
      return new Error('Cannot get anyone from an empty queue')
    }
    return this.data[this.front]
  }
  toString() {
    let data = 'front ['
    for (let i = this.front; i != this.tail; i = (i + 1) % this.data.length) {
      data += `${this.data[i]}`
      if (!Object.is((i + 1) % this.data.length, this.tail)) {
        data += `, `
      }
    }
    data += '] tail'
    return `LoopQueue: size = ${this.size}, capacity = ${this.getCapacity()}, data = ${data}`
  }
  _resizeArray(newCapacity) {
    let newArray = new Array(newCapacity + 1)
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.data[(this.front + i) % this.data.length]
    }
    this.data = newArray
    this.front = 0
    this.tail = this.size
  }
}

export {
  ArrayQueue,
  LoopQueue
}