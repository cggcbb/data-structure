/*
 * @Description: 栈是一种线性结构, 相比数组, 栈对应的操作是数组的子集, 只能从栈顶添加数据, 也只能从栈顶取出数据(LIFO)
 * @Author: cggcbb
 * @Date: 2019-01-08 10:33:38
 * @LastEditTime: 2019-01-14 11:33:51
 * @Application: 撤销(Undo)操作, 程序调用的系统栈, 匹配括号
 */
import myArray from '@/assets/js/array/Array'

export default class ArrayStack {
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
  // 压栈(向栈中添加一个元素)
  push(element) {
    this.array.addLast(element)
  }
  // 弹出栈顶元素(删除栈顶的元素)
  pop() {
    return this.array.removeLast()
  }
  // 查看栈顶元素
  peek() {
    return this.array.getLast()
  }
  toString() {
    let size = this.getSize()
    let data = '['
    for (let i = 0; i < size; i++) {
      data += `${this.array.get(i)}`
      if (!Object.is(i, size - 1)) {
        data += `, `
      }
    }
    data += '] top'
    return `ArrayStack: size = ${size}, capacity = ${this.getCapacity()}, data = ${data}`
  }
}