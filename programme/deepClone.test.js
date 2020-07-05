const {cloneDepth, cloneBreadth} = require('./deepClone');

const number = 1;
const array = [1,2,[3, 5],4];
const object = {a: {c: 1}, b: 2};
let notDefined;
const symbol = Symbol();
const date = new Date();
const fn = () => undefined;
const mix = {
  a: [undefined, symbol, 1, '123', {b: {c: 2}}],
  d: 3,
  e: {f: 4}
};

function vaild(result, expected) {
  console.log(result, 'result');
  for (let key in expected) {
    if (typeof expected[key] === 'object') {
      vaild(result[key], expected[key])
    } else {
      expect(expected[key]).toBe(result[key]);
    }
  }
}

it('深度优先-递归-深拷贝', () => {
  expect(cloneDepth(number)).toBe(1);
  vaild(cloneDepth(array));
  vaild(cloneDepth(object));
  // vaild(cloneDepth(notDefined));
  // vaild(cloneDepth(symbol));
  // vaild(cloneDepth(date));
  // vaild(cloneDepth(fn));
  // vaild(cloneDepth(mix));
});

it('广度优先-递归-深拷贝', () => {
  // expect(cloneBreadth(number)).toBe(1);
  // vaild(cloneDepth(array));
  // vaild(cloneDepth(object));
  // vaild(cloneDepth(notDefined));
  // vaild(cloneDepth(symbol));
  // vaild(cloneDepth(date));
  // vaild(cloneDepth(fn));
  // vaild(cloneBreadth(mix));
});