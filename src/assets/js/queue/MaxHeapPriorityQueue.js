/*
 * @Description: 基于最大堆(ArrayMaxHeap)实现的悠闲队列
 * @Author: cggcbb
 * @Date: 2019-01-16 17:10:07
 * @LastEditTime: 2019-01-16 17:32:15
 */
import ArrayMaxHeap from '@/assets/js/heap/ArrayMaxHeap'

export default class MaxHeapPriorityQueue {
  constructor() {
    this.maxHeap = new ArrayMaxHeap()
  }
  getSize() {
    return this.maxHeap.size()
  }
  isEmpty() {
    return this.maxHeap.isEmpty()
  }
  getCapacity() {
    return this.maxHeap.getCapacity()
  }
  // 入队(向队尾添加一个元素)
  enqueue(element) {
    this.maxHeap.add(element)
  }
  // 出队(删除队首元素)
  dequeue() {
    return this.maxHeap.extractMax()
  }
  // 查看队首元素
  getFront() {
    return this.maxHeap.findMax()
  }
  toString() {
    let size = this.getSize()
    return `MaxHeapPriorityQueue: size = ${size}, ${this.maxHeap.data}`
  }
}