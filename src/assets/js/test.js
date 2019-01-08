import Array from '@/assets/js/array'
import Stack from '@/assets/js/stack'

let array = new Array()

for(let i = 0; i < 10; i++) {
  array.addLast(i)
  console.log(`%c ${array.toString()}`, 'color: #9e33dc')
  if (i % 3 == 2) {
    array.removeLast()
    console.log(`%c ${array.toString()}`, 'color: #9e33dc')
  }
}

console.log('===============================================================================')

let stack = new Stack()
for(let i = 0; i < 10; i++) {
  stack.push(i)
  console.log(`%c ${stack.toString()}`, 'color: #9e33dc')
  if (i % 3 == 2) {
    stack.pop()
    console.log(`%c ${stack.toString()}`, 'color: #9e33dc')
  }
}