/*
 * @Description: 节点
 * @Author: cggcbb
 * @Date: 2019-01-09 14:24:55
 * @LastEditTime: 2019-01-09 14:28:20
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