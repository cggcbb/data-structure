/*
 * @Description: 链表栈
 * @Author: cggcbb
 * @Date: 2019-01-10 14:37:13
 * @LastEditTime: 2019-01-10 14:51:32
 */
import LinkedList from '@/assets/js/linkedList/LinkedList'

export default class LinkedListStack {
  constructor() {
    this.list = new LinkedList()
  }
  getSize() {
    return this.list.getSize()
  }
  isEmpty() {
    return this.list.isEmpty()
  }
  push(element) {
    this.list.addFirst(element)
  }
  pop() {
    return this.list.removeFirst()
  }
  peek() {
    return this.list.getFirst()
  }
  toString() {
    return `LinkedListStack: size = ${this.getSize()}, data = top ${this.list}`
  }
}
