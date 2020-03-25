/**
 * @author: Xu Ke
 * @date: 2020/3/6 10:15 AM
 * @Description: js 操作符、方法等实现
 * @lastModificationBy:
 * @lastModification:
 * @lastModificationDate:
 */


/**
 * new 方法
 */
function Persion(name, age) {
  this.name = name;
  this.age = age;
}
Persion.prototype.s = 's'

const coco = new Persion('coco', 21);

// console.log(coco, 'coco');

const newFn = function(fn) {
  return function(...p) {
    // const o = {"__proto__": fn.prototype};
    const o = Object.create(fn.prototype);
    // 构造函数默认返回this，也可指定返回
    const r = fn.apply(o, p);
    return Object.prototype.toString.call(r) === '[object Object]' ? r : o;
  }
};

const hicks = newFn(Persion)('hicks', 29);

console.log(hicks, 'hicks');
console.log(hicks.__proto__, 'hicks proto');

Persion.prototype.sex = 'male';

// console.log(coco.sex, 'coco sex');

// console.log(hicks.sex, 'hicks sex');


/**
 * 继承
 */
function Super(name){
  this.name=name;
  this.age=25;
  this.array=[1,2,3];
  this.obj={a:'prop'};
  this.say=function(){
    console.log(this.name);
  }
}
Super.prototype.testInherit=function(){
  console.log('I am method of super prototype')
}

// 构造函数继承
function Child1(name){
  Super.apply(this,arguments);
  this.name=name;
  this.sayName=function(){
    console.log(this.name);
  }
}
var parent=new Super('lucy');
var child1=new Child1('jack');
var child2=new Child1('jack2');
// console.log(parent, 'parent');
// console.log(child1, 'child1');
// console.log(child1.__proto__ === Child1.prototype, child1 instanceof Super);//true flase
child1.array.push(4);
// console.log(child1.array,child2.array, parent.array);
// child1.testInherit();

// 原型链继承
function Child2(name){
  this.name=name;
  this.sayName=function(){
    console.log(this.name);
  }
}
var parent=new Super('lucy');
Child2.prototype=parent;
var child1=new Child2('jack');
var child2=new Child2('jack2');
child1.array.push(4);
child1.obj.b="prop2";
// console.log(child1.array,child2.array,child1.obj,child2.obj);
// console.log(child1.constructor);

/**
 * 防抖
 * 搜索条
 */
function debounce(fn, ms) {
  let timer;

  return function(...p) {
    console.log('click');
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      // fn.apply(this, p)
      fn(...p)
    }, ms)
  }
}
const f = (name) => {
  this.name = name;
  console.log(this, 11);
};

const a = debounce(function(n) {
  f(n)
}, 1000);

// a(123);
// setInterval(a, 2900)

/**
 * 节流
 */
function throttle(fn, ms) {
  let canExec = true;
  let timer;

  return function() {
    if(canExec) {
      fn();
      canExec = false;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      canExec = true;
    }, ms)
  }
}

const throttleFn = throttle(function () {
  console.log('exec throttleFn')
}, 3000);

// throttleFn();
// setTimeout(throttleFn, 3000)
