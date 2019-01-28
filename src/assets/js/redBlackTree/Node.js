/*
 * @Description: 红黑树节点
 * @Author: cggcbb
 * @Date: 2019-01-28 11:11:08
 * @LastEditTime: 2019-01-28 11:26:04
 */
const RED = true

export default class Node {
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
    this.color = RED
  }
}