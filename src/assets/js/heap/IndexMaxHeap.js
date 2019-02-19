/*
 * @Description: 索引最大堆
 * @Author: cggcbb
 * @Date: 2019-02-19 14:49:08
 * @LastEditTime: 2019-02-19 17:16:09
 */
export default class IndexMaxHeap {
  // 堆的最大数量这里有capacity限制, 默认为16
  constructor(capacity = 16) {
    // 原始数据
    this.data = new Array(capacity)
    // indexes 本质上是一个 堆
    this.indexes = new Array(capacity)
    // 反向列表 存储索引在堆中的位置 初始值都为-1
    this.rev = new Array(capacity)
    for (let i = 0; i < capacity; i++) {
      this.rev[i] = -1
    }
    this.count = 0
    this.capacity = capacity
  }
  getSize() {
    return this.count
  }
  isEmpty() {
    return Object.is(this.count, 0)
  }
  // 向索引最大堆中添加元素
  add(i, element) {
    this.data[i] = element
    this.indexes[this.count] = i
    this.rev[i] = this.count
    this._siftUp(this.count)
    this.count ++
  }
  // 堆中元素上浮
  _siftUp(index) {
    while(index > 0 && this.data[this.indexes[index]] > this.data[this.indexes[this._parent(index)]]) {
      let parentIndex = this._parent(index)
      this._swap(index, parentIndex)
      this.rev[this.indexes[index]] = index
      this.rev[this.indexes[parentIndex]] = parentIndex
      index = parentIndex
    }
  }
  // 从索引最大堆中取出最大元素
  extractMax() {
    let ret = this.data[this.indexes[0]]
    this._swap(0, this.count - 1)
    this.rev[this.indexes[0]] = 0
    this.rev[this.indexes[this.count - 1]] = -1
    this.count --
    this._siftDown(0)
    return ret
  }
  // 堆中元素下沉
  _siftDown(index) {
    while(this._leftChild(index) < this.count) {
      let leftChild = this._leftChild(index)
      // 左孩子和右孩子中, 较大值的孩子索引
      let larger = this._getLargerChild(leftChild)
      // 如果当前值比返回的较大值索引对应的值小, 就交换两者位置
      if (this.data[this.indexes[index]] >= this.data[this.indexes[larger]]) {
        break
      } else {
        this._swap(index, larger)
        this.rev[this.indexes[index]] = index
        this.rev[this.indexes[larger]] = larger
        index = larger
      }
    }
  }
  // 更新索引最大堆中指定位置的元素
  update(index, element) {
    if(!this.contains(index)) {
      return
    }
    this.data[index] = element
    // j 为 index 索引 在堆中的位置
    let j = this.rev[index]
    // 试着往上浮，再试着往下沉。就完成了整个索引堆的调整
    this._siftDown(j)
    this._siftUp(j)
  }
  // 是否包含
  contains(index) {
    if (index < 0 || index > this.capacity) {
      throw new Error(`index [${index}] is illegal ...`)
    }
    return this.rev[index] >= 0
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
  // 交换this.indexes[i] 和 this.indexes[j] 的位置
  _swap(i, j) {
    let temp = this.indexes[i]
    this.indexes[i] = this.indexes[j]
    this.indexes[j] = temp
  }
  // 返回左孩子和右孩子中, 较大值的孩子索引
  _getLargerChild(index) {
    if ((index + 1) < this.count && this.data[this.indexes[index + 1]] > this.data[this.indexes[index]]) {
      index ++
    }
    return index
  }
}