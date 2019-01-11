/*
 * @Description: 树结点
 * @Author: cggcbb
 * @Date: 2019-01-10 16:11:41
 * @LastEditTime: 2019-01-11 15:27:15
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