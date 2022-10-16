function* gen() {
  yield 1;
  if (false) yield 2;
  yield 3;
  return 200;
}
let iter = gen();

console.log(iter[Symbol.iterator]);
console.log(iter[Symbol.iterator]() == iter);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (const a of gen()) {
  console.log(a);
}

console.clear();
function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}

// let iter4 = limit(4, [1, 2, 3, 4, 5, 6]);
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());

function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}
let iter3 = odds(10);
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());

for (const a of odds(12)) {
  console.log(a);
}

console.clear();
console.log(...odds(10));
console.log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(7);
console.log(head);
console.log(tail);

const [a, b, ...rest] = odds(10);
console.log(a);
console.log(b);
console.log(rest);
