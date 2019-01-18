/*
 * @Description: 基于链表的map映射 映射内部元素不能重复 时间复杂度为O(n)
 * @Author: cggcbb
 * @Date: 2019-01-15 14:13:58
 * @LastEditTime: 2019-01-18 15:46:07
 */

import Node from './LinkedListNode'

export default class LinkedListMap {
  constructor() {
    // 虚拟头节点
    this.dummyHead = new Node()
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return Object.is(this.size, 0)
  }
  // 获取key的节点
  _getNode(key) {
    let cur = this.dummyHead.next
    while(cur) {
      if (Object.is(cur.key, key)) {
        return cur
      }
      cur = cur.next
    }
    return null
  }
  // 是否包含key
  contains(key) {
    return !!this._getNode(key)
  }
  // 获取 key 的 value 值
  get(key) {
    let node = this._getNode(key)
    return node ? node.value : null 
  }
  // 添加(key相同的时候, 覆盖value)
  add(key, value) {
    let node = this._getNode(key)
    if (node) {
      node.value = value
      return
    }
    this.dummyHead.next = new Node(key, value, this.dummyHead.next)
    this.size ++
  }
  // 更新(没找到key的时候, 抛异常)
  set(key, value) {
    let node = this._getNode(key)
    if (!node) {
      throw new Error(`${key} isn't exist...`)
    }
    node.value = value
  }
  // 删除key
  remove(key) {
    let prev = this.dummyHead
    while(prev.next) {
      if (Object.is(prev.next.key, key)) {
        break
      }
      prev = prev.next
    }
    if (prev.next) {
      let delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
      this.size --
      return delNode.value
    }
    return null
  }
  keySet() {
    let ret = new Array()
    let cur = this.dummyHead.next
    while(cur) {
      ret.push(cur.key)
      cur = cur.next
    }
    return ret
  }
}