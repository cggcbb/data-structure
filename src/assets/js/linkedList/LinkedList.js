/*
 * @Description: 链表
 * @Author: cggcbb
 * @Date: 2019-01-10 10:45:47
 * @LastEditTime: 2019-01-10 14:29:43
 */

import Node from '../linkedList/Node'

export default class LinkedList {
  constructor() {
    // 虚拟头结点
    this.dummyHead = new Node()
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return Object.is(this.size, 0)
  }
  // 向链表指定位置添加元素element (链表不涉及到下标, 这里只是练习)
  add(index, element) {
    if (index < 0 || index > this.size) {
      throw new Error('add failed, index is illegal...')
    }
    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    /**
     * let node = new Node(element)
     * node.next = prev.next
     * prev.next = node
     */
    prev.next = new Node(element, prev.next)
    this.size ++
  }
  // 向链表头添加新元素element
  addFirst(element) {
    this.add(0, element)
  }
  // 向链表尾部添加新元素element
  addLast(element) {
    this.add(this.size, element)
  }
  // 获取指定位置的元素
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('get failed, index is illegal...')
    }
    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    return cur.element
  }
  getFirst() {
    return this.get(0)
  }
  getLast() {
    return this.get(this.size - 1)
  }
  // 更新指定位置的元素
  set(index, element) {
    if (index < 0 || index >= this.size) {
      throw new Error('set failed, index is illegal...')
    }
    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    cur.element = element
  }
  // 删除指定位置的元素
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('remove failed, index is illegal...')
    }
    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next
    }
    let retNode = prev.next
    prev.next = retNode.next
    retNode.next = null
    this.size --
    return retNode.element
  }
  removeFirst() {
    return this.remove(0)
  }
  removeLast() {
    return this.remove(this.size - 1)
  }
  // 是否包含指定元素
  contains(element) {
    let cur = this.dummyHead.next
    while (cur) {
      if (Object.is(cur.next.element, element)) {
        return true
      }
      cur = cur.next
    }
    return false
  }
  toString() {
    let data = 'LinkedList: '
    for (let cur = this.dummyHead.next; cur; cur = cur.next) {
      data += `${cur} -> `
    }
    data += ' NULL'
    return data
  }
}