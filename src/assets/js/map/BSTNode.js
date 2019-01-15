/*
 * @Description: 二分搜索树映射节点
 * @Author: cggcbb
 * @Date: 2019-01-15 15:41:09
 * @LastEditTime: 2019-01-15 15:42:23
 */
export default class Node {
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
  }
  toString() {
    return `${this.key.toString()} : ${this.value.toString()}`
  }
}