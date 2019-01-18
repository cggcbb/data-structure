/*
 * @Description: trie 节点
 * @Author: cggcbb
 * @Date: 2019-01-18 11:21:22
 * @LastEditTime: 2019-01-18 11:37:44
 */
import LinkedListMap from '@/assets/js/map/LinkedListMap'

export default class Node {
  constructor(isWord = false) {
    this.isWord = isWord
    this.next = new LinkedListMap()
  }
}