/*
 * @Description: 链表节点
 * @Author: cggcbb
 * @Date: 2019-01-09 14:24:55
 * @LastEditTime: 2019-01-14 16:26:55
 */
export default class Node {
  constructor(element = null, next = null) {
    this.element = element
    this.next = next
  }
  toString() {
    return this.element.toString()
  }
}