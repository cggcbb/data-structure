/*
 * @Description: 线段树
 * @Author: cggcbb
 * @Date: 2019-01-17 14:58:41
 * @LastEditTime: 2019-01-17 17:10:24
 */

export default class segmentTree {
  constructor(arr = [], merge = () => {}) {
    this.merge = merge
    this.data = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
      this.data[i] = arr[i]
    }
    // 开辟4倍的空间, 才能承载整个线段树
    this.tree = new Array(arr.length * 4)
    // 创建整个线段树
    this._buildSegmentTree(0, 0, this.data.length - 1)
  }
  _buildSegmentTree(treeIndex, left, right) {
    if (Object.is(left, right)) {
      this.tree[treeIndex] = this.data[left]
      return
    }
    let leftChild = this._leftChild(treeIndex)
    let rightChild = this._rightChild(treeIndex)
    // let middle = (left + right) / 2 防止left 和 right 超出最大值, 采用下面的写法
    let middle = left + (right - left) / 2 | 0
    this._buildSegmentTree(leftChild, left, middle)
    this._buildSegmentTree(rightChild, middle + 1, right)
    this.tree[treeIndex] = this.merge(this.tree[leftChild], this.tree[rightChild])
  }
  query(queryL, queryR) {
    if (queryL < 0 || queryL >= this.data.length || queryR < 0 || queryR >= this.data.length || queryL > queryR) {
      throw new Error('index is illegal ...')
    }
    return this._query(0, 0, this.data.length - 1, queryL, queryR)
  }
  // 在以treeIndex为根线段树[left...right]的范围中, 查询[queryL....queryR]的值
  _query(treeIndex, left, right, queryL, queryR) {
    if (Object.is(left, queryL) && Object.is(right, queryR) ) {
      return this.tree[treeIndex]
    }
    let leftChild = this._leftChild(treeIndex)
    let rightChild = this._rightChild(treeIndex)
    let middle = left + (right - left) / 2 | 0
    if (queryR <= middle) {
      return this._query(leftChild, left, middle, queryL, queryR)
    } else if (queryL >= middle + 1) {
      return this._query(rightChild, middle + 1, right, queryL, queryR)
    }
    let leftResult = this._query(leftChild, left, middle, queryL, middle)
    let rightResult = this._query(rightChild, middle + 1, right, middle + 1, queryR)
    return this.merge(leftResult, rightResult)
  }
  getSize() {
    return this.data.length
  }
  get(index) {
    if (index < 0 || index > this.data.length) {
      throw new Error('index is illegal ...')
    }
    return this.data[index]
  }
  _leftChild(index) {
    return index * 2 + 1
  }
  _rightChild(index) {
    return index * 2 + 2
  }
  toString() {
    let data = '['
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i]) {
        data += this.tree[i]
      } else {
        data += 'null'
      }
      if (!Object.is(i, this.tree.length - 1)) {
        data += ', '
      }
    }
    data += ']'
    return data
  }
}