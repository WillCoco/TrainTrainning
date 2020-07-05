/**
 * 每次可选择+1或者+2， 累计加到n的所有可能
 */


/**
 * 方法1：
 *  方式：递归
 *  数据结构：对象
 */
function createTree(n) {
  let times = 0;

  let tree = {
    value: 0
  };

  /**
   * 根据条件往下延展树
   */
  function createNode(pNode) {
    const leftValue = 1 + pNode.value;
    const rightValue = 2 + pNode.value;

    if (leftValue < n) {
      pNode.left = createNode({value: leftValue});
    }

    if (rightValue < n) {
      pNode.right = createNode({value: rightValue});
    }

    if (leftValue === n || rightValue === n) {
      times++;
    }

    return pNode;
  }

  createNode(tree);

  return times;
}

console.time('1')
const b = createTree(10);
console.timeEnd('1')
console.log(b, '所有可能');

/**
 * 方法2：
 *  方式：栈遍历
 *  数据结构：单链表
 */
function Node(data, left, right) {
  this.data = data; // 当前值累计
  this.left = left; // +1的选择分叉
  this.right = right; // +2的选择分叉
}

Node.prototype.show = function () {
  return this.data;
};

function BST() {
  this.root = new Node(0, null, null);
  this.times = 0;
}

BST.prototype.insert = function (num) {
  const stack = [this.root];
  while (stack.length > 0) {
    const currentNode = stack.pop();

    // 当前累计值未达到num， 继续延展树
    if (currentNode.data < num) {
      if (!currentNode.left) {
        stack.push({data: 1 + currentNode.data})
      }
      if (!currentNode.right) {
        stack.push({data: 2 + currentNode.data})
      }
    } else if (currentNode.data === num) {
      this.times++;
    }
  }
};

BST.prototype.inOrder = function(node){
  if(node){
    this.inOrder(node.left);
    console.log(node.show() + " ");
    this.inOrder(node.right);
  }
};

console.time('2')
var bst  = new BST();

bst.insert(10);
console.timeEnd('2')


console.log(bst);


