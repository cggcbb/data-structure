/*
 * @Description: 循环队列
 * @Author: cggcbb
 * @Date: 2019-01-10 10:33:29
 * @LastEditTime: 2019-01-10 11:50:29
 */

export default class LoopQueue {
  constructor(capacity = 10) {
    this.data = new Array(capacity + 1)
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
  // 队列是否已满
  isFull() {
    return Object.is(this.front, (this.tail + 1) % this.data.length)
  }
  // 入队(向队尾添加一个元素)
  enqueue(element) {
    if (this.isFull()) {
      this._resizeArray(this.data.length * 2)
    }
    this.data[this.tail] = element
    this.tail = (this.tail + 1) % this.data.length
    this.size ++
  }
  // 出队(删除队首元素)
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue')
    }
    let ret = this.data[this.front]
    this.data[this.front] = null
    this.front = (this.front + 1) % this.data.length
    this.size --
    if (Object.is(this.size, this.data.length / 3 | 0) && this.data.length / 2) {
      this._resizeArray(this.data.length / 2 | 0)
    }
    return ret
  }
  // 查看队首元素
  getFront() {
    if (this.isEmpty()) {
      throw new Error('Cannot get anyone from an empty queue')
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
  // 扩容 / 缩容
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