/*
 * @Description: 二分搜索树
 * @Author: cggcbb
 * @Date: 2019-01-10 16:13:37
 * @LastEditTime: 2019-01-11 17:29:59
 */
import Node from './Node'
import Stack from '@/assets/js/stack/ArrayStack'
import LoopQueue from '@/assets/js/queue/LoopQueue'

export default class BinarySearchTree {
  constructor() {
    this.root = null
    this.size = 0
  }
  size() {
    return this.size
  }
  isEmpty() {
    return Object.is(this.size, 0)
  }
  // 向指定根结点添加元素
  add(node, element) {
    if (!node) {
      this.size ++
      return new Node(element)
    }
    if (element < node.element) {
      node.left = this.add(node.left, element)
    } else if (element > node.element) {
      node.right = this.add(node.right, element)
    }
    return node
  }
  // 添加元素
  addElement(element) {
    this.root = this.add(this.root, element)
  }
  contains(element) {
    return this._contains(this.root, element)
  }
  _contains(node, element) {
    if (!node) {
      return false
    }
    if (Object.is(node.element, element)) {
      return true
    }
    if (node.element > element) {
      return this._contains(node.left, element)
    } else {
      return this._contains(node.right, element)
    }
  }
  // 二分搜索树前序遍历 (深度优先遍历)
  prevOrder() {
    this._prevOrder(this.root)
  }
  // 前序遍历以node为根的二分搜索树, 递归算法
  _prevOrder(node) {
    if (!node) {
      return
    }
    // 访问当前结点 console一下
    console.log(node.element)
    // 访问左子树
    this._prevOrder(node.left)
    // 访问右子树
    this._prevOrder(node.right)
  }
  // 前序遍历以root为根的二分搜索树, 非递归算法 (利用'栈'数据结构)
  prevOrderNoneRecursive() {
    let stack = new Stack()
    stack.push(this.root)
    while(!stack.isEmpty()) {
      let cur = stack.pop()
      // 访问当前结点 console一下
      console.log(cur.element)
      if (cur.right) {
        stack.push(cur.right)
      }
      if (cur.left) {
        stack.push(cur.left)
      }
    }
  }
  // 二分搜索树中序遍历 (深度优先遍历)
  inOrder() {
    this._inOrder(this.root)
  }
  // 中序遍历以node为根的二分搜索树, 递归算法
  _inOrder(node) {
    if (!node) {
      return
    }
    // 访问左子树
    this._inOrder(node.left)
    // 访问当前结点 console一下
    console.log(node.element)
    // 访问右子树
    this._inOrder(node.right)
  }
  // 二分搜索树后序遍历 (深度优先遍历)
  postOrder() {
    this._postOrder(this.root)
  }
  // 后续遍历以node为根的二分搜索树, 递归算法
  _postOrder(node) {
    if (!node) {
      return
    }
    // 访问左子树
    this._postOrder(node.left)
    // 访问右子树
    this._postOrder(node.right)
    // 访问当前结点 console一下
    console.log(node.element)
  }
  // 层序遍历 (广度优先遍历)
  leverOrder() {
    let loopQueue = new LoopQueue()
    loopQueue.enqueue(this.root)
    while(!loopQueue.isEmpty()) {
      let cur = loopQueue.dequeue()
      console.log(cur.element)
      if (cur.left) {
        loopQueue.enqueue(cur.left)
      }
      if (cur.right) {
        loopQueue.enqueue(cur.right)
      }
    }
  }
  // 搜索最小元素
  mini() {
    return this._mini(this.root)
  }
  _mini(node) {
    if(this.isEmpty()) {
      throw new Error('binary search tree is empty...')
    }
    if (!node.left) {
      return node.element
    }  
    return this._mini(node.left)
  }
  // 删除最小元素
  removeMin() {
    let ret = this.mini()
    this.root = this._removeMin(this.root)
    return ret
  }
  _removeMin(node) {
    if (!node.left) {
      let rightNode = node.right
      node.right = null
      this.size --
      return rightNode
    }
    node.left = this._removeMin(node.left)
    // 返回删除最小值后新的二叉树的根
    return node
  }
  // 搜索最大元素
  max() {
    return this._max(this.root)
  }
  _max(node) {
    if(this.isEmpty()) {
      throw new Error('binary search tree is empty...')
    }
    if (!node.right) {
      return node.element
    }  
    return this._max(node.right)
  }
  // 删除最大元素
  removeMax() {
    let ret = this.max()
    this.root = this._removeMax(this.root)
    return ret
  }
  _removeMax(node) {
    if (!node.right) {
      let leftNode = node.left
      node.left = null
      this.size --
      return leftNode
    }
    node.right = this._removeMax(node.right)
    // 返回删除最大值后新的二叉树的根
    return node
  }
  // 删除指定元素
  remove(element) {
    this._remove(this.root, element)
  }
  _remove(node, element) {
    if (!node) {
      return null
    }
    if (element < node.left ) {
      node.left = this._remove(node.left, element)
    } else if (element > node.left) {
      node.right = this._remove(node.right, element)
    } else { // node.element == element
      
    }
  }
}