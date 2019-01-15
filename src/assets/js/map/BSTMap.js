/*
 * @Description: 基于二分搜索树的映射
 * @Author: cggcbb
 * @Date: 2019-01-15 15:35:34
 * @LastEditTime: 2019-01-15 16:13:43
 */
import Node from './BSTNode'

export default class BSTMap {
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
    return node
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
  // 搜索最小元素
  mini() {
    return this._mini(this.root)
  }
  _mini(node) {
    if(this.isEmpty()) {
      throw new Error('BSTMap is empty...')
    }
    if (!node.left) {
      return node
    }  
    return this._mini(node.left)
  }
  _removeMin(node) {
    if (!node.left) {
      return this._removeMinNoneLeft(node)
    }
    node.left = this._removeMin(node.left)
    // 返回删除最小值后新的二分搜索树的根
    return node
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
    if (node.key > key) {
      node.left = this._remove(node.left, key)
      return node
    } else if (node.key < key) {
      node.right = this._remove(node.right, key)
      return node
    } else { // Object.is(node.key, key)
      
      // 待删的节点没有左子树
      if (!node.left) {
        return this._removeMinNoneLeft(node)
      }
      // 待删的节点没有右子树
      if (!node.right) {
        return this._removeMaxNoneRight(node)
      }
      
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
      successorNode.right = this._removeMin(node.right)
      successorNode.left = node.left
      node.left = node.right = null
      return successorNode
      
      // 前驱y
      /**
       * let pioneerNode = this._max(node.left)
       * pioneerNode.left = this._removeMax(node.left)
       * pioneerNode.right = node.right
       * node.left = node.right = null
       * return pioneerNode
       */
    }
  }
}