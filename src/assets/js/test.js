import Array from '@/assets/js/array/Array'
import ArrayStack from '@/assets/js/stack/ArrayStack'
import LinkedListStack from '@/assets/js/stack/LinkedListStack'
import ArrayQueue from '@/assets/js/queue/ArrayQueue'
import LoopQueue from '@/assets/js/queue/LoopQueue'
import LinkedListQueue from '@/assets/js/queue/LinkedListQueue'
import LinkedList from '@/assets/js/linkedList/LinkedList'

// 自定义 console.log
const consolePrint = (content, color = '#9e33dc', fontSize = 12) => {
  console.log(`%c ${content}`, `color: ${color}; font-size: ${fontSize}px`)
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