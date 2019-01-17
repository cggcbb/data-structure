import Array from '@/assets/js/array/Array'
import ArrayStack from '@/assets/js/stack/ArrayStack'
import LinkedListStack from '@/assets/js/stack/LinkedListStack'
import ArrayQueue from '@/assets/js/queue/ArrayQueue'
import LoopQueue from '@/assets/js/queue/LoopQueue'
import LinkedListQueue from '@/assets/js/queue/LinkedListQueue'
import MaxHeapPriorityQueue from '@/assets/js/queue/MaxHeapPriorityQueue'
import LinkedList from '@/assets/js/linkedList/LinkedList'
import BinarySearchTree from '@/assets/js/binarySearchTree/BinarySearchTree'
import BSTSet from '@/assets/js/set/BSTSet'
import LinkedListSet from '@/assets/js/set/LinkedListSet'
import LinkedListMap from '@/assets/js/map/LinkedListMap'
import BSTMap from '@/assets/js/map/BSTMap'
import ArrayMaxHeap from '@/assets/js/heap/ArrayMaxHeap'
import SegmentTree from '@/assets/js/segmentTree/SegmentTree'

// 自定义 console.log
const consolePrint = (content, color = '#9e33dc', fontSize = 12) => {
  console.log(`%c${content}`, `color: ${color}; font-size: ${fontSize}px`)
}
// 分割线
const line = (text) => {
  consolePrint(`—————— ${text} ———————————————————————————————————————————————————————————————————————————`, '#f40', 16)
}

line('Array')

// 测试 '数组' 数据结构
let array = new Array()
for(let i = 0; i < 10; i++) {
  array.addLast(i)
  consolePrint(array)
  if (i % 3 == 2) {
    array.removeLast()
    consolePrint(array)
  }
}

line("ArrayStack")

// 测试 '栈' 数据结构
let arrayStack = new ArrayStack()
for(let i = 0; i < 10; i++) {
  arrayStack.push(i)
  consolePrint(arrayStack)
  if (i % 3 == 2) {
    arrayStack.pop()
    consolePrint(arrayStack)
  }
}

line("LinkedListStack")

// 测试 '栈' 数据结构
let linkedListStack = new LinkedListStack()
for(let i = 0; i < 10; i++) {
  linkedListStack.push(i)
  consolePrint(linkedListStack)
  if (i % 3 == 2) {
    linkedListStack.pop()
    consolePrint(linkedListStack)
  }
}

line('ArrayQueue')

// 测试 '数组队列' 数据结构
let arrayQueue = new ArrayQueue()
for(let i = 0; i < 10; i++) {
  arrayQueue.enqueue(i)
  consolePrint(arrayQueue)
  if (i % 3 == 2) {
    arrayQueue.dequeue()
    consolePrint(arrayQueue)
  }
}

line("LoopQueue")

// 测试 '循环队列' 数据结构
let loopQueue = new LoopQueue()
for(let i = 0; i < 10; i++) {
  loopQueue.enqueue(i)
  consolePrint(loopQueue)
  if (i % 3 == 2) {
    loopQueue.dequeue()
    consolePrint(loopQueue)
  }
}

line("LinkedListQueue")

// 测试 '循环队列' 数据结构
let linkedListQueue = new LinkedListQueue()
for(let i = 0; i < 10; i++) {
  linkedListQueue.enqueue(i)
  consolePrint(linkedListQueue)
  if (i % 3 == 2) {
    linkedListQueue.dequeue()
    consolePrint(linkedListQueue)
  }
}

line("MaxHeapPriorityQueue")

let maxHeapPriorityQueue = new MaxHeapPriorityQueue()
line('enqueue')
for(let i = 0; i < 10; i++) {
  maxHeapPriorityQueue.enqueue(i)
  consolePrint(maxHeapPriorityQueue)
}
line('dequeue')
for(let i = 0; i < 10; i++) {
  maxHeapPriorityQueue.dequeue(i)
  consolePrint(maxHeapPriorityQueue)
}

line("LinkedList")

// 测试 '链表'
let linkedList = new LinkedList()
for (let i = 0; i < 5; i++) {
  linkedList.addFirst(i)
}
consolePrint(linkedList) // LinkedList: 4 -> 3 -> 2 -> 1 -> 0 ->  NULL
linkedList.add(2, 666)
consolePrint(linkedList) // LinkedList: 4 -> 3 -> 666 -> 2 -> 1 -> 0 ->  NULL
linkedList.remove(3)
consolePrint(linkedList) // LinkedList: 4 -> 3 -> 666 -> 1 -> 0 ->  NULL
linkedList.removeFirst() 
consolePrint(linkedList) // LinkedList: 3 -> 666 -> 1 -> 0 ->  NULL
linkedList.removeLast()
consolePrint(linkedList) // LinkedList: 3 -> 666 -> 1 ->  NULL
linkedList.removeElement(3)
consolePrint(linkedList) // LinkedList: 666 -> 1 ->  NULL

line('BinarySearchTree')

// 测试 '二分搜索树'
let binarySearchTree = new BinarySearchTree()
let arr = [5, 3, 6, 8, 4, 2]
for (let i = 0; i < arr.length; i++) {
  binarySearchTree.addElement(arr[i])
}
line('prevOrder')
binarySearchTree.prevOrder() // 5 3 2 4 6 8
line('prevOrderNoneRecursive')
binarySearchTree.prevOrderNoneRecursive() // 5 3 2 4 6 8
line('inOrder')
binarySearchTree.inOrder() // 2 3 4 5 6 8
line('postOrder')
binarySearchTree.postOrder() // 2 4 3 8 6 5
line('leverOrder')
binarySearchTree.leverOrder()
consolePrint(`mini : ${binarySearchTree.mini()}`)
consolePrint(`max : ${binarySearchTree.max()}`)
binarySearchTree.remove(3)

line('BSTSet')

// 测试 '二分搜索树集合' 
let bstSet = new BSTSet()
let setArr = [5, 3, 6, 8, 4, 2, 2, 5]
for (let i = 0; i < setArr.length; i++) {
  bstSet.add(setArr[i])
}
bstSet.bst.prevOrder()

line('LinkedListSet')

// 测试 '链表集合'
let linkedListSet = new LinkedListSet()
for (let i = 0; i < setArr.length; i++) {
  linkedListSet.add(setArr[i])
}
consolePrint(linkedListSet.list)

line('LinkedListMap')

// 测试 '链表映射'
let linkedListMap = new LinkedListMap()
let mapArr = [1, 9, 2, 8, 3, 0, 7, 4, 0, 6, 5, 5, 0, 9, 1, 2, 7, 5, 4, 4, 3, 0, 6, 7, 9, 6, 4, 8, 3, 4, 7, 9, 0]
for (let el of mapArr) {
  if (linkedListMap.contains(el)) {
    linkedListMap.set(el, linkedListMap.get(el) + 1)
  } else {
    linkedListMap.add(el, 1)
  }
}
for (let i = 0; i < 10; i++) {
  consolePrint(`key : ${i}, 出现的次数 : ${linkedListMap.get(i)}`)
}
linkedListMap.remove(9)

line('BSTMap')

// 测试 '二分搜索树映射'
let bstMap = new BSTMap()
for (let el of mapArr) {
  if (bstMap.contains(el)) {
    bstMap.set(el, bstMap.get(el) + 1)
  } else {
    bstMap.add(el, 1)
  }
}
for (let i = 0; i < 10; i++) {
  consolePrint(`key : ${i}, 出现的次数 : ${bstMap.get(i)}`)
}

line('ArrayMaxHeap')

let arrayMaxHeap = new ArrayMaxHeap()
for (let i = 0; i < 10; i++) {
  arrayMaxHeap.add(Math.random() * 100 | 0)
}
let heapArr = []
for (let i = 0; i< 10; i++) {
  let temp = arrayMaxHeap.extractMax()
  heapArr[i] = temp
  consolePrint(heapArr[i])
}

line('SegmentTree')

let numbers = []
for (let i = 0; i < 10000000; i++) {
  numbers.push(Math.random() * 10 | 0)
}
let segmentTree = new SegmentTree(numbers, (l, r) => l + r)y
let time1 = +new Date()
let total = 0
for (let i = 100; i <= 9000000; i++) {
  total += numbers[i]
}
let time2 = +new Date()
consolePrint(`total: ${total},  花费时间: ${time2 - time1}ms`)

let time3 = +new Date()
let total1 = segmentTree.query(100, 9000000)
let time4 = +new Date()
consolePrint(`total: ${total1},  花费时间: ${time4 - time3}ms`)