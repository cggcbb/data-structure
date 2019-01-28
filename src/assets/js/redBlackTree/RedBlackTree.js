/*
 * @Description: 红黑树  等价于2-3树 (保持"黑平衡"的二叉树) 这里是一个左倾的红黑树
 *               1: 所有节点是红色或黑色
 *               2: 根节点是黑色
 *               3: 每个叶子节点（最后的空节点）是黑色的
 *               4: 每个红色节点的两个子节点都是黑色(从每个叶子到根的所有路径上不能有两个连续的红色节点)
 *               5: 从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点
 * @Author: cggcbb
 * @Date: 2019-01-28 11:04:42
 * @LastEditTime: 2019-01-28 11:42:10
 */
import Node from './Node'

// 红色节点
const RED = true
// 黑色节点
const BLACK = false

export default class RBTree {
  constructor() {
    this.root = null
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return Object.is(this.size, 0)
  }
  // 添加元素
  add(key, value) {
    this.root = this._add(this.root, key, value)
    this.root.color = BLACK
  }
  _add(node, key, value) {
    if (!node) {
      this.size ++ 
      return new Node(key, value)
    }
    if (node.key > key) {
      node.left = this._add(node.left, key, value)
    } else if (node.key < key) {
      node.right = this._add(node.right, key, value)
    } else {
      node.value = value
    }
    /**
     * 红黑树性质保持
     * 1: 当某个节点的右孩子是红色, 并且左孩子不是红色, 对该节点进行左旋转
     * 2: 当某个节点的左孩子是红色, 并且左孩子的左孩子也是红色(某个节点的左边连续两个红节点), 对该节点进行右旋转
     * 3: 当某个节点的左孩子和右孩子都为红色(此时该节点肯定为黑色), 对该节点进行颜色反转
     */
    if (this._isRed(node.right) && !this._isRed(node.left)) {
      node = this._leftRotate(node)
    }
    if (this._isRed(node.left) && this._isRed(node.left.left)) {
      node = this._rightRotate(node)
    }
    if (this._isRed(node.left) && this._isRed(node.right)) {
      this._flipColors(node)
    }
    return node
  }
  /**
   * 对节点node进行左旋转
   *          node                                   right
   *          /  \                                   /    \
   *        left  right      node左旋转之后          node   b
   *              / \      ------------------->    /   \   / \
   *             a   b                            left  a  c  d
   *                / \
   *               c   d
   */
  _leftRotate(node) {
    let rightNode = node.right

    node.right = rightNode.left
    rightNode.left = node
    
    rightNode.color = node.color
    node.color = RED

    return rightNode
  }
  /**
   * 对节点node进行右旋转
   *          node                                   left
   *          /  \                                   /   \
   *        left  right      node右旋转之后          a    node
   *       /    \          ---------------->       / \   /   \
   *      a      b                                c   d  b   right
   *     / \
   *    c   d
   */
  _rightRotate(node) {
    let leftNode = node.left

    node.left = leftNode.right
    leftNode.right = node

    leftNode.color = node.color
    node.color = RED

    return leftNode
  }
  // 颜色反转
  _flipColors(node) {
    node.color = RED
    node.left.color = BLACK
    node.right.color = BLACK
  }
  // 返回以node为根节点的二分搜索树中，key所在的节点
  _getNode(node, key){
    if(!node) {
      return null
    }
    if(Object.is(node.key, key)) {
      return node
    } else if(node.key > key) {
      return this._getNode(node.left, key)
    } else {
      return this._getNode(node.right, key)
    }   
  }
  // 判断是否是红节点
  _isRed(node) {
    if (!node) {
      return BLACK
    }
    return node.color
  }
  // 是否包含key
  contains(key) {
    return !!this._getNode(this.root, key)
  }
  // 获取 key 的 value 值
  get(key) {
    let node = this._getNode(this.root, key)
    return node ? node.value : null 
  }
  // 更新(没找到key的时候, 抛异常)
  set(key, value) {
    let node = this._getNode(this.root, key)
    if (!node) {
      throw new Error(`${key} isn't exist...`)
    }
    node.value = value
  }
}