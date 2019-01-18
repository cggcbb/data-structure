/*
 * @Description: Trie 一般用于存储字符串, 查询字符串的时间复杂度不取决于整个Trie的大小, 而是取决于查询字符串的长度
 * @Author: cggcbb
 * @Date: 2019-01-18 11:26:24
 * @LastEditTime: 2019-01-18 16:41:18
 */
import Node from './Node'
const matchAnyone = ['.', ',', '!', '?', '@']

export default class Trie {
  constructor() {
    this.root = new Node()
    this.size = 0
  }
  getSize() {
    return this.size
  }
  // 添加字符串
  insert(word) {
    let cur = this.root
    for (let el of word) {
      if (!cur.next.get(el)) {
        cur.next.add(el, new Node())
      }
      cur = cur.next.get(el)
    }
    if (!cur.isWord) {
      cur.isWord = true
      this.size ++
    }
  }
  // 查询是否有word为前缀的字符串
  startWith(word) {
    let cur = this.root
    for (let el of word) {
      if (!cur.next.get(el)) {
        return false
      }
      cur = cur.next.get(el)
    }
    return true
  }
  // 查询字符串是否在Trie中(matchAnyone数组里面的符号可以匹配任何字符)
  search(word) {
    return this._match(this.root, word, 0)
  }
  _match(node, word, index) {
    // 递归出口
    if (Object.is(word.length, index)) {
      return node.isWord
    }
    let char = word[index]
    if (!matchAnyone.includes(char)) {
      if (!node.next.get(char)) {
        return false
      }
      return this._match(node.next.get(char), word, index + 1)
    } else {
      for (let nextKey of node.next.keySet()) {
        if (this._match(node.next.get(nextKey), word, index + 1)) {
          return true
        }
      }
      return false
    }
  }
}