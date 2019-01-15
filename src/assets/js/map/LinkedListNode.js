/*
 * @Description: 链表映射节点
 * @Author: cggcbb
 * @Date: 2019-01-15 14:14:57
 * @LastEditTime: 2019-01-15 15:41:29
 */

export default class Node {
  constructor(key = null, value = null, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
  toString() {
    return `${this.key.toString()} : ${this.value.toString()}`
  }
}