/*
 * @Description: 队列是一种线性结构, 相比数组, 队列对应的操作是数组的子集, 只能从队尾(tail)添加数据, 也只能从队首(front)取出数据(FIFO)
 * @Author: cggcbb
 * @Date: 2019-01-08 16:10:40
 * @LastEditTime: 2019-01-10 10:40:50
 * @Ps: 我自己电脑测试过1000000次'数组队列'和'循环队列'的入队和出队操作 分别花费时间 1007535 ms 和 87 ms
 *      因为数组队列的出队(dequeue)算法属于O(n)级别, 而循环队列的出队(dequeue)算法属于O(1)(均摊)级别
 */
import myArray from '@/assets/js/array/Array'

export default class ArrayQueue {
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
  // 入队(向队尾添加一个元素)
  enqueue(element) {
    this.array.addLast(element)
  }
  // 出队(删除队首元素)
  dequeue() {
    return this.array.removeFirst()
  }
  // 查看队首元素
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