/*
 * @Description: 基于 AVLTree 的map映射
 * @Author: cggcbb
 * @Date: 2019-01-24 15:43:27
 * @LastEditTime: 2019-01-24 15:52:43
 */
import AVLTree from '@/assets/js/AVLTree/AVLTree'

export default class AVLTreeMap {
  constructor() {
    this.avl = new AVLTree()
  }
  getSize() {
    return this.avl.getSize()
  }
  isEmpty() {
    return this.avl.isEmpty()
  }
  contains(key) {
    return this.avl.contains(key)
  }
  // 获取 key 的 value 值
  get(key) {
    return this.avl.get(key)
  }
  set(key, value) {
    this.avl.set(key, value)
  }
  // 添加(key相同的时候, 覆盖value)
  add(key, value) {
    this.avl.add(key, value)
  }
  remove(key) {
    return this.avl.remove(key)
  }
}