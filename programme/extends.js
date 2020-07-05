/**
 * 继承
*/
function Father () {
  this.name = 'father'
}

function Son () {
  this.name = 'Son'
}

// 组合寄生
function extends1(son, father) {
  son.prototype = Object.create(father.prototype);
  son.prototype.constructor = son;
}

Father.prototype.hello = function() {
  console.log(`I'm ${this.name}`)
}

const father = new Father();
father.hello();

extends1(Son, Father);

const son = new Son();
son.hello();
console.log(son)