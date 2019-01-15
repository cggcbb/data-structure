/*
 * @Description: 基于链表的Set集合, 集合内部元素不能重复, 时间复杂度为O(n)
 * @Author: cggcbb
 * @Date: 2019-01-15 10:05:20
 * @LastEditTime: 2019-01-15 11:40:57
 */

 // 引入链表
import LinkedList from '@/assets/js/linkedList/LinkedList'

export default class LinkedListSet {
  constructor() {
    this.list = new LinkedList()
  }
  getSize() {
    return this.list.getSize()
  }
  isEmpty() {
    return this.list.isEmpty()
  }
  contains(element) {
    return this.list.contains(element)
  }
  add(element) {
    if (!this.list.contains(element)) {
      this.list.addFirst(element)
    }
  }
  remove(element) {
    this.list.removeElement(element)
  }
}