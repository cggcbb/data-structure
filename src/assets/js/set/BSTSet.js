/*
 * @Description: 基于二分搜索树的Set集合, 集合内部元素不能重复  
 *               时间复杂度平均为O(h) => O(logN), 极端情况下, 二分搜索树会退化成链表, 时间复杂度变为O(n)
 * @Author: cggcbb
 * @Date: 2019-01-15 10:00:18
 * @LastEditTime: 2019-01-15 11:31:10
 */

 // 引入二分搜索树
import BinarySearchTree from '@/assets/js/binarySearchTree/BinarySearchTree'

export default class BSTSet {
  constructor() {
    this.bst = new BinarySearchTree()
  }
  getSize() {
    return this.bst.size()
  }
  isEmpty() {
    return this.bst.isEmpty()
  }
  contains(element) {
    return this.bst.contains(element)
  }
  add(element) {
    this.bst.addElement(element)
  }
  remove(element) {
    this.bst.remove(element)
  }
}