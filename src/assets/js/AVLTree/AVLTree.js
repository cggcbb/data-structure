/*
 * @Description: AVL既满足二分搜索树的性质, 也满足平衡二叉树的性质(每个节点的左孩子和右孩子高度差不能大于1)
 * @Author: cggcbb
 * @Date: 2019-01-21 14:46:52
 * @LastEditTime: 2019-01-25 11:19:02
 */
import Node from './Node'

export default class AVLTree {
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
  // 获取node节点的高度值
  _getHeight(node) {
    if (!node) {
      return 0
    }
    return node.height
  }
  // 获取node节点的平衡因子
  _getBalanceFactor(node) {
    if (!node) {
      return 0
    }
    return this._getHeight(node.left) - this._getHeight(node.right)
  }
  // 判断是不是平衡二叉树
  isBalanceTree() {
    return this._isBalanceTree(this.root)
  }
  _isBalanceTree(node) {
    if (!node) {
      return true
    }
    if (Math.abs(this._getBalanceFactor(node)) > 1) {
      return false
    }
    return this._isBalanceTree(node.left) && this._isBalanceTree(node.right)
  }
  // 判断是否是二分搜索树
  isBST() {
    let keys = new Array()
    this._inOrder(this.root, keys)
    for (let i = 1; i < keys.length; i++) {
      if (keys[i - 1] > keys[i]) {
        return false
      }
    }
    return true
  }
  inOrder() {
    return this._inOrder(this.root, new Array())
  }
  _inOrder(node, keys) {
    if (!node) {
      return
    }
    this._inOrder(node.left, keys)
    keys.push(node.key)
    this._inOrder(node.right, keys)
    return keys
  }
  // 添加元素
  add(key, value) {
    this.root = this._add(this.root, key, value)
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
    // 更新node的高度值
    node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1

    // 平衡维护
    return this._defendBalance(node)
  }
  // 平衡维护
  _defendBalance(node) {
    // LL
    if (this._getBalanceFactor(node) > 1 && this._getBalanceFactor(node.left) >= 0) {
      return this._rightRotate(node)
    }
    // RR
    if (this._getBalanceFactor(node) < -1 && this._getBalanceFactor(node.right) <= 0) {
      return this._leftRotate(node)
    }
    // LR
    if (this._getBalanceFactor(node) > 1 && this._getBalanceFactor(node.left) < 0) {
      node.left = this._leftRotate(node.left)
      return this._rightRotate(node)
    }
    // RL
    if (this._getBalanceFactor(node) < -1 && this._getBalanceFactor(node.right) > 0) {
      node.right = this._rightRotate(node.right)
      return this._leftRotate(node)
    }
    return node
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

    node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1
    leftNode.height = Math.max(this._getHeight(leftNode.left), this._getHeight(leftNode.right)) + 1

    return leftNode
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

    node.height = Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1
    rightNode.height = Math.max(this._getHeight(rightNode.left), this._getHeight(rightNode.right)) + 1

    return rightNode
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
  _removeMinNoneLeft(node) {
    let rightNode = node.right
    node.right = null
    this.size --
    return rightNode
  }
  _removeMaxNoneRight(node) {
    let leftNode = node.left
    node.left = null
    this.size --
    return leftNode
  }
  // 删除key
  remove(key) {
    let node = this._getNode(this.root, key)
    if (node) {
      this.root = this._remove(this.root, key)
      return node.value
    }
    return null
  }
  _remove(node, key) {
    if (!node) {
      return null
    }
    let retNode = null
    if (node.key > key) {
      node.left = this._remove(node.left, key)
      retNode = node
    } else if (node.key < key) {
      node.right = this._remove(node.right, key)
      retNode = node
    } else { // Object.is(node.key, key)
      
      // 待删的节点没有左子树
      if (!node.left) {
        retNode = this._removeMinNoneLeft(node)
      }
      // 待删的节点没有右子树
      else if (!node.right) {
        retNode = this._removeMaxNoneRight(node)
      } else {
      
        /**
         * 待删的节点既有左子树, 又有右子树
         * Hibbard deletion in 1962
         * 1、找到待删节点的后继(比待删节点大的最小节点(R), 即待删节点右子树的最小节点) 
         *             或者前驱(比待删节点小的最大节点(R), 即待删节点左子树的最大节点)
         * 2、后继: 让R节点的右子树, 链接上待删节点右子树删除R后的二分搜索树
         *    前驱: 让R节点的右子树, 链接上待删节点右子树
         * 3、后继: 让R节点的左子树, 链接上待删节点的左子树
         *    前驱: 让R节点的左子树, 链接上待删节点左子树删除R后的二分搜索树
         */

        // 后继
        let successorNode = this._mini(node.right)
        successorNode.right = this._remove(node.right, successorNode.key)
        successorNode.left = node.left
        node.left = node.right = null
        retNode = successorNode
        
        // 前驱
        /**
         * let pioneerNode = this._max(node.left)
         * pioneerNode.left = this._remove(node.left, pioneerNode.key)
         * pioneerNode.right = node.right
         * node.left = node.right = null
         * retNode = pioneerNode
         */
      }
      if (!retNode) {
        return null
      }
      // 更新node的高度值
      retNode.height = Math.max(this._getHeight(retNode.left), this._getHeight(retNode.right)) + 1

      // 平衡维护
      return this._defendBalance(retNode)
    }
  }
}