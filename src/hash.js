import { HashMap } from './index.js';

const map = new HashMap();
map.set('name', 'Lola');
map.set('city', 'Hallandale Beach');
map.set('mood', 'coding vibes');

console.log(map.get('name'));       // "Lola"
console.log(map.has('city'));       // true
console.log(map.length());          // 3
console.log(map.keys());            // ["name", "city", "mood"] (order not guaranteed)
console.log(map.remove('mood'));    // true
console.log(map.length());          // 2

const test = new HashMap(); // or HashMap() if using a factory
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.set('frog', 'yellow');
console.log(test.length());  
test.set('moon', 'silver');
test.set('mon', 'silver');
test.set('on', 'silver');
console.log(test.length());  
console.log(test._shouldResize());  
test.remove('on');
test.remove('moon');
test.remove('mon');
test.remove('frog');
console.log(test._shouldResize());  

