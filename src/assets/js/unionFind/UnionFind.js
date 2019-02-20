/*
 * @Description: 基于rank优化和路径压缩的并查集, 查询操作和合并操作 时间复杂度都是O(h) -> h为树的高度 
 * @Author: cggcbb
 * @Date: 2019-01-21 10:45:45
 * @LastEditTime: 2019-02-20 15:01:18
 */

export default class QuickFind {
  constructor(size) {
    this.parent = new Array(size)
    this.rank = new Array(size)
    for (let index in this.parent) {
      this.parent[index] = index
      this.rank[index] = 1
    }
  }
  getSize() {
    return this.parent.length
  }
  // 查询元素 p 和 元素 q 是否在一个集合中
  isConnected(p, q) {
    return Object.is(this._find(p), this._find(q))
  }
  // 查询元素p所对应的集合编号
  _find(p) {
    if(p < 0 || p >= this.parent.length) {
      throw new Error('index is illegal...')
    }
    /**
     * 递归实现的路径压缩 每一次_find的时候, 将当次查询的根节点指向最终的根节点
     * 
     * if (p != this.parent[p]) {
     *   parent[p] = this._find(this.parent[p])
     * }
     * return parent[p]
     * 
     */
    while(p != this.parent[p]) {
      // 路径压缩
      this.parent[p] = this.parent[this.parent[p]]
      
      p = this.parent[p]
    }
    return p
  }
  // 合并元素p和q
  unionElements(p, q) {
    let pRoot = this._find(p)
    let qRoot = this._find(q)
    if (Object.is(pRoot, qRoot)) {
      return
    }
    // 根据两个元素所在的树的rank来判断合并方向
    // 将 rank 低的集合合并到 rank 高的集合
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = this.parent[qRoot]
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = this.parent[pRoot]
    } else {
      this.parent[qRoot] = this.parent[pRoot]
      this.rank[pRoot] += 1
    }
  }
}