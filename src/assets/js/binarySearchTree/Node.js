/*
 * @Description: 树节点
 * @Author: cggcbb
 * @Date: 2019-01-10 16:11:41
 * @LastEditTime: 2019-01-14 16:26:50
 */
export default class Node {
  constructor(element = null, left = null, right = null) {
    this.element = element
    this.left = left
    this.right = right
  }
  toString() {
    return this.element.toString()
  }
}