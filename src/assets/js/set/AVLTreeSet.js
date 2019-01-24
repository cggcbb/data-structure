/*
 * @Description: 基于 AVLTree 的Set集合, 集合内部元素不能重复
 * @Author: cggcbb
 * @Date: 2019-01-24 15:55:59
 * @LastEditTime: 2019-01-24 15:58:24
 */
import AVLTree from '@/assets/js/AVLTree/AVLTree'

export default class AVLTreeSet {
  constructor() {
    this.avl = new AVLTree()
  }
  getSize() {
    return this.avl.getSize()
  }
  isEmpty() {
    return this.avl.isEmpty()
  }
  contains(element) {
    return this.avl.contains(element)
  }
  add(element) {
    this.avl.add(element, null)
  }
  remove(element) {
    this.avl.remove(element)
  }
}
