/*
 * @Description: 基于动态数组实现的最大二叉堆, 二叉堆首先是一个完全二叉树, 还要满足父节点, 既大于左孩子, 又大于右孩子
 * @Author: cggcbb
 * @Date: 2019-01-16 14:36:50
 * @LastEditTime: 2019-01-17 09:50:15
 */

import myArray from '@/assets/js/array/Array'

export default class ArrayMaxHeap {
  constructor(capacity = 10) {
    this.data = new myArray(capacity)
  }
  size() {
    return this.data.getSize()
  }
  isEmpty() {
    return this.data.isEmpty()
  }
  getCapacity() {
    return this.data.getCapacity()
  }
  // 返回完全二叉树的数组表示中, 一个索引所表示的元素的父节点的索引
  _parent(index) {
    if (!index) { // index === 0
      throw new Error(`index : [${index}] doesn't have parent....`)
    }
    return (index - 1) / 2 | 0
  }
  // 返回完全二叉树的数组表示中, 一个索引所表示的元素的左孩子的索引
  _leftChild(index) {
    return index * 2 + 1
  }
  // 返回完全二叉树的数组表示中, 一个索引所表示的元素的右孩子的索引
  _rightChild(index) {
    return index * 2 + 2
  }
  // 添加元素
  add(element) {
    this.data.addLast(element)
    // 保证添加元素后, 依旧满足最大二叉堆的特性
    this._siftUp(this.data.getSize() - 1)
  }
  // 堆中元素上浮
  _siftUp(index) {
    while(index > 0 && this.data.get(index) > this.data.get(this._parent(index))) {
      this.data.swap(index, this._parent(index))
      index = this._parent(index)
    }
  }
  // 查询最大元素
  findMax() {
    if (this.isEmpty()) {
      throw new Error(`can't findMax from an empty heap ...`)
    }
    return this.data.get(0)
  }
  // 取出最大元素
  extractMax() {
    let ret = this.findMax()
    this.data.swap(0, this.data.getSize() - 1)
    this.data.removeLast()
    this._siftDown(0)
    return ret
  }
  // 堆中元素下沉
  _siftDown(index) {
    while(this._leftChild(index) < this.data.getSize()) {
      let leftChild = this._leftChild(index)
      let larger = this._getLargerChild(leftChild)
      if (this.data.get(index) >= this.data.get(larger)) {
        break
      } else {
        this.data.swap(index, larger)
        index = larger
      }
    }
  }
  // 返回左孩子和右孩子中, 较大值的孩子索引
  _getLargerChild(index) {
    if ((index + 1) < this.data.getSize() && this.data.get(index + 1) > this.data.get(index)) {
      index ++
    }
    return index
  }
}