/**
 * 柯里化函数实现
 * add(1); 			// 1
 * add(1)(2);  	// 3
 * add(1)(2)(3)；// 6
 * add(1)(2, 3); // 6
 * add(1, 2)(3); // 6
 * add(1, 2, 3); // 6
 *
 */


const curry = fn => {
  const len = fn.length;
  return function curried(...args) {
     // 收集完参数, 执行
    if (args.length === len) {
      return fn.apply(null, args);
    }

     // 否则继续收集参数
    return (..._args) => {
      return curried.apply(null, [...args, ..._args]);
    };
  };
};


const sum = (x, y, z) => x + y + z;
const add = curry(sum);

console.log(add(1,2,3,4,5));
console.log(add(1));
console.log(add(1)(2));
console.log(add(1)(2)(3));
