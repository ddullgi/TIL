const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸트폰케이스", price: 15000 },
  { name: "후트티", price: 30000 },
  { name: "바지", price: 25000 },
];

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

let names = [];
for (const p of products) {
  names.push(p.name);
}
console.log(names);

console.log(map((p) => p.name, products));

let prices = [];
for (const p of products) {
  prices.push(p.price);
}
console.log(prices);

console.log(map((p) => p.price, products));

console.clear();
function* gen() {
  yield 2;
  yield 3;
  yield 4;
}
console.log(map((a) => a * a, gen()));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
// const it = m[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

console.log(map(([k, a]) => [k, a * 2], m));
console.log(new Map(map(([k, a]) => [k, a * 2], m)));

let under20000 = [];
for (const p of products) {
  if (p.price < 20000) under20000.push(p);
}
console.log(...under20000);

let over20000 = [];
for (const p of products) {
  if (p.price > 20000) over20000.push(p);
}
console.log(...over20000);

console.clear();
const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

console.log(...filter((p) => p.price < 20000, products));
console.log(...filter((p) => p.price >= 20000, products));

console.log(
  filter(
    (n) => n % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })()
  )
);

console.clear();

const nums = [1, 2, 3, 4, 5];
let total = 0;
for (const n of nums) {
  total += n;
}
console.log(total);

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;

console.log(reduce(add, 0, [1, 2, 3, 4, 5]));
console.log(reduce(add, [1, 2, 3, 4, 5]));
//15

// console.log(add(add(add(add(0, 1), 2), 3), 4));

console.log(
  reduce((total_price, product) => total_price + product.price, 0, products)
);

console.clear();

console.log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price < 20000, products)
    )
  )
);

console.log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price < 20000, products)
    )
  )
);

console.log(
  reduce(
    add,
    filter(
      (n) => n >= 20000,
      map((p) => p.price, products)
    )
  )
);
