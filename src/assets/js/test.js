import Array from '@/assets/js/array/Array'
import ArrayStack from '@/assets/js/stack/ArrayStack'
import ArrayQueue from '@/assets/js/queue/ArrayQueue'
import LoopQueue from '@/assets/js/queue/LoopQueue'

// 自定义 console.log
const consolePrint = (content, color = '#9e33dc') => {
  console.log(`%c ${content}`, `color: ${color}`)
}
// 分割线
const line = () => {
  consolePrint('—————————————————————————————————————————————————————————————————————————————————', '#f40')
}

// 测试 '数组' 数据结构
let array = new Array()
for(let i = 0; i < 10; i++) {
  array.addLast(i)
  consolePrint(array.toString())
  if (i % 3 == 2) {
    array.removeLast()
    consolePrint(array.toString())
  }
}

line()

// 测试 '栈' 数据结构
let stack = new ArrayStack()
for(let i = 0; i < 10; i++) {
  stack.push(i)
  consolePrint(stack.toString())
  if (i % 3 == 2) {
    stack.pop()
    consolePrint(stack.toString())
  }
}

line()

// 测试 '数组队列' 数据结构
let arrayQueue = new ArrayQueue()
for(let i = 0; i < 10; i++) {
  arrayQueue.enqueue(i)
  consolePrint(arrayQueue.toString())
  if (i % 3 == 2) {
    arrayQueue.dequeue()
    consolePrint(arrayQueue.toString())
  }
}

line()

// 测试 '循环队列' 数据结构
let loopQueue = new LoopQueue()
for(let i = 0; i < 10; i++) {
  loopQueue.enqueue(i)
  consolePrint(loopQueue.toString())
  if (i % 3 == 2) {
    loopQueue.dequeue()
    consolePrint(loopQueue.toString())
  }
}
