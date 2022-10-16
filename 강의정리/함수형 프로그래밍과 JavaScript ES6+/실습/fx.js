const L = {};

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => {
  return reduce((a, f) => f(a), args);
};

const pipe = (f, ...fs) => {
  return (...as) => go(f(...as), ...fs);
};

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

L.map = curry(function* (f, iter) {
  for (const a of iter) yield f(a);
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

L.filter = curry(function* (f, iter) {
  for (const a of iter) if (f(a)) yield a;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};

L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

const take = curry((limit, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == limit) return res;
  }
  return res;
});
