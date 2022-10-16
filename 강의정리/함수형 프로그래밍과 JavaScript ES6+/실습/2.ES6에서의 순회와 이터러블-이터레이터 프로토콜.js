const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const a of iterable) {
//   console.log(a);
// }
console.log(iterator[Symbol.iterator]() === iterator);
iterator.next();

for (const a of iterator) {
  console.log(a);
}

// for (const a of document.querySelectorAll("*")) {
//   console.log(a);
// }
// const all = document.querySelectorAll("*");
// console.log(all);
// console.log(all[Symbol.iterator]);
// console.log(all[Symbol.iterator]());
// let iter = all[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

console.clear();
const a = [1, 2];
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
const b = [...a, ...map];
console.log(b);
for (const a of b) {
  console.log(a);
}
