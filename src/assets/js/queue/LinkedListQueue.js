/*
 * @Description: 链表队列
 * @Author: cggcbb
 * @Date: 2019-01-10 15:02:54
 * @LastEditTime: 2019-01-10 15:21:33
 */

import Node from '@/assets/js/linkedList/Node'

export default class LinkedListQueue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return Object.is(this.size, 0)
  }
  enqueue(element) {
    if (!this.tail) {
      this.tail = new Node(element)
      this.head = this.tail
    } else {
      this.tail.next = new Node(element)
      this.tail = this.tail.next
    }
    this.size++
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue...')
    }
    let retNode = this.head
    this.head = this.head.next
    retNode.next = null
    if (!this.head) {
      this.tail = null
    }
    this.size --
    return retNode.element
  }
  getFront() {
    if (this.isEmpty()) {
      throw new Error('Cannot get anyone from an empty queue...')
    }
    return this.head.element
  }
  toString() {
    let data = 'LinkedListQueue: front '
    for (let cur = this.head; cur; cur = cur.next) {
      data += `${cur} -> `
    }
    data += ' NULL tail'
    return `LinkedListQueue: size = ${this.size}, data = ${data}`
  }
}