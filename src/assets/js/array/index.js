/**
 * 创建方式 : let array = new myArray()
 */
export default class myArray {
  constructor(capacity = 10) {
    this.data = new Array(capacity)
    this.size = 0
  }
  // 获取数组中的数据
  getData() {
    return this.data
  }
  // 获取数组中的元素个数
  getSize() {
    return this.size
  }
  // 获取数组的容量
  getCapacity() {
    return this.data.length
  }
  // 是否为空数组
  isEmpty() {
    return Object.is(this.size, 0)
  }
  // 向数组指定位置添加元素
  add(index, element) {
    if (index < 0 || index > this.size) {
      throw new Error('add failed, index is illegal ...')
    }
    // 元素个数达到总容量时, 扩容总容量一倍
    if (Object.is(this.data.length, this.size)) {
      this._resizeArray(2 * this.data.length)
    }
    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i]
    }
    this.data[index] = element
    this.size ++
  }
  // 所有元素后添加一个新的元素
  addLast(element) {
    this.add(this.size, element)
  }
   // 数组第一位添加一个新的元素
  addFirst(element) {
    this.add(0, element)
  }
  // 获取指定下标元素
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('get failed, index is illegal ...')
    }
    return this.data[index]
  }
  // 获取数组第一个元素
  getFirst() {
    return this.get(0)
  }
  // 获取元素最后一个元素
  getLast() {
    return this.get(this.size - 1)
  }
  // 更新指定下标元素
  set(index, element) {
    if (index < 0 || index >= this.size) {
      throw new Error('set failed, index is illegal ...')
    }
    this.data[index] = element
  }
  // 查询数组是否包含指定元素
  contains(element) {
    for (let i = 0; i < this.size; i++) {
      if (Object.is(this.data[i], element)) {
        return true
      }
    }
    return false
  }
  // 查询指定元素下标index
  findIndex(element) {
    for (let i = 0; i < this.size; i++) {
      if (Object.is(this.data[i], element)) {
        return i
      }
    }
    return -1
  }
  // 删除指定下标的元素, 返回删除的元素
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('remove failed, index is illegal ...')
    }
    let ret = this.data[index]
    for (let i = index; i < this.size; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.size --
    this.data[this.size] = null
    // 元素个数达到总容量的三分之一时, 缩容一半容量( xxx | 0 指向下取整, 和Math.floor()效果一样 && 需要保证数组容量不能为0)
    if (Object.is(this.size, this.data.length / 3 | 0) && this.data.length / 2) {
      this._resizeArray(this.data.length / 2 | 0)
    }
    return ret
  }
  // 删除第一个元素
  removeFirst() {
    return this.remove(0)
  }
  // 删除最后一个元素
  removeLast() {
    return this.remove(this.size - 1)
  }
  toString() {
    let data = '['
    for (let i = 0; i < this.size; i++) {
      data += `${this.data[i]}`
      if (!Object.is(i, this.size - 1)) {
        data += `, `
      }
    }
    data += ']'
    return `Array: size = ${this.size}, capacity = ${this.data.length}, data = ${data}`
  }
  // 数组 扩容 / 缩容
  _resizeArray(newCapacity) {
    let newData = new Array(newCapacity)
    for(let i = 0; i < this.size; i++) {
      newData[i] = this.data[i]
    }
    this.data = newData
  }
}



/**
 * 想要隐藏私有变量(必须从提供的接口访问数据) 可以有这种方式 创建方式 : let array = myArray()
 */
/* eslint-disable no-unused-vars */
const myArray_other = (() => {
  let data = null
  let size = 0
  return (capacity = 10) => {

    data = new Array(capacity)

    const add = (index, element) => {
      if (index < 0 || index > size) {
        throw new Error('add failed, index is illegal ...')
      }
      // 元素个数达到总容量时, 扩容总容量一倍
      if (Object.is(data.length, size)) {
        _resizeArray(2 * data.length)
      }
      for (let i = size - 1; i >= index; i--) {
        data[i + 1] = data[i]
      }
      data[index] = element
      size ++
    }

    const addLast = (element) => {
      add(size, element)
    }

    const getData = () => {
      return data
    }

    const getCapacity = () => {
      return data.length
    }

    const getSize = () => {
      return size
    }

    // 数组 扩容 / 缩容
    const _resizeArray = (newCapacity) => {
      let newData = new Array(newCapacity)
      for(let i = 0; i < size; i++) {
        newData[i] = data[i]
      }
      data = newData
    }

    return {
      add,
      addLast,
      getData,
      getCapacity,
      getSize
    }
  }
})()