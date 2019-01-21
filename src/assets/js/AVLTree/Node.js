/*
 * @Description: 平衡二叉树映射节点
 * @Author: cggcbb
 * @Date: 2019-01-15 15:41:09
 * @LastEditTime: 2019-01-21 14:59:19
 */
export default class Node {
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
    this.height = 1
  }
  toString() {
    return `${this.key.toString()} : ${this.value.toString()}`
  }
}