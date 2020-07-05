/**
 * @author: Xu Ke
 * @date: 2020/3/6 10:28 AM
 * @Description: 算法
 * @lastModificationBy:
 * @lastModification:
 * @lastModificationDate:
 */

/**
 * 排序
 */
const arr = [2.3, 5, 3, 2, 4, 18, 5, 7, 0];
// 冒泡
function bubbling(arr, isSmall2large) {
  const data = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let condition = isSmall2large ? data[i] > data[j] : data[i] < data[j];
      if (condition) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  return data;
}

// console.log(bubbling(arr), 'bubbling sort');

// 快速
function quick (data, {t = 0} = {}) {
  if (data.length <= 1) {
    return data
  }

  const data$1 = [...data];

  // 基准
  const flag = data$1.splice(t, 1)[0];

  const left = [];

  const right = [];

  data$1.forEach(function(data) {
    if (data > flag) {
      left.push(data)
    } else {
      right.push(data)
    }
  });

  return [...quick(left, {t}), flag, ...quick(right, {t})]
}

// console.log(quick(arr), 'quickly sort');

/**
 * 2叉数遍历
 */
const tree2x = [
  [
    [
      1,
      2
    ],
    [
      3,
      [
        4,
        [
          5,
          6
        ]
      ]
    ]
  ],
  1,
  [
    [
      [
        8,
        [
          9,
          [
            ,
            10
          ]
        ]
      ]
    ],
    [7]
  ]
];

/**
 * 深度优先
 */
// 1. 前序
function DLR(data) {
  function execFn(v) {
    if (Object.prototype.toString.call(v) != '[object Array]') {
      console.log(v, 'execFn')
    }
  }

  function iterateFn(node) {
    // 执行方法
    execFn(node);

    // 有左节点
    if (node[0] != undefined) {
      iterateFn(node[0])
    }

    // 有右节点
    if (node[1] != undefined) {
      iterateFn(node[1])
    }
  }

  iterateFn(data);
}

// 2. 中序
function LDR(data) {
  function execFn(v) {
    if (Object.prototype.toString.call(v) != '[object Array]') {
      console.log(v, 'execFn')
    }
  }

  function iterateFn(node) {
    // 有左节点
    if (node[0] != undefined) {
      iterateFn(node[0])
    }

    // 执行方法
    execFn(node);

    // 有右节点
    if (node[1] != undefined) {
      iterateFn(node[1])
    }
  }

  iterateFn(data);
}
// 3. 后序
function LRD(data) {
  function execFn(v) {
    if (Object.prototype.toString.call(v) != '[object Array]') {
      console.log(v, 'execFn')
    }
  }

  function iterateFn(node) {
    // 有左节点
    if (node[0] != undefined) {
      iterateFn(node[0])
    }

    // 有右节点
    if (node[1] != undefined) {
      iterateFn(node[1])
    }

    // 执行方法
    execFn(node);
  }

  iterateFn(data);
}
// LDR(tree2x);

/**
 * 广度优先
 */

/**
 * 非递归
 */
function getList() {

}



/**
 * 多叉数寻径
 */

// 深度
function nxDepth(data) {
  function execFn(v) {
    if (Object.prototype.toString.call(v) != '[object Array]') {
      console.log(v, 'execFn')
    }
  }

  function iterateFn(nodes) {
    nodes.forEach(function(node) {
      execFn(node);
      if (node.forEach) {
        iterateFn(node)
      }
    });
  }

  iterateFn(data);
}
// nxDepth(tree2x);

// 广度
function nxBreadth(data) {
  function execFn(v) {
    if (Object.prototype.toString.call(v) != '[object Array]') {
      console.log(v, 'execFn')
    }
  }

  function iterateFn(nodes) {
    let stacks = [];
    nodes.forEach(function(node) {
      execFn(node);
      if (node.forEach) {
        stacks = stacks.concat(node);
      }
    });

    if (stacks.length > 0) {
      iterateFn(stacks);
    }
  }

  iterateFn(data);
}
// nxBreadth(tree2x);

/**
 * 地图信息
 */
const oneStepData2 = [
  [1, 1], [1, 2], [1, 3], [1, 4],
  [2, 1], [2, 2], [2, 3], [2, 4],
  [3, 1], [3, 2], [3, 3], [3, 4],
  [4, 1], [4, 2], [4, 3], [4, 4]
];

/**
 * 寻找路径
 * param: {object} data - 地图信息
 * param: {number} startIndex - 起点
 * param: {boolean} isFindAll - 是否找出全部路径
 */
function routing(data, startIndex, isFindAll) {
  const startStacks = [[...data[startIndex]]];
  const startData = [...data];
  startData.splice(startIndex, 1);

  let hasFind = false;
  let result = [];

  iterateFn(startData, startStacks);

  return result;

  function iterateFn(data, stacks) {
    const nowNode = stacks[stacks.length - 1];

    if (stacks.length === oneStepData2.length) {
      hasFind = true;
      result.push(stacks);
      return;
    }

    if (data.length < 0) {
      result.push('无解');
      return;
    }

    data.forEach(function(node, index) {
      const isValid = isValidStep(nowNode, node);
      if (isValid) {
        const {newData, newStacks} = step(data, stacks, index);

        if (!hasFind || isFindAll) {
          iterateFn(newData, newStacks);
        }
      }
    })
  }

  // 有效的相邻步
  function isValidStep(nowNode, nextNode) {
    const firstDiff = Math.abs(nowNode[0] - nextNode[0]);
    const secondDiff = Math.abs(nowNode[1] - nextNode[1]);

    return (
      (firstDiff === 1 && secondDiff === 0) || (firstDiff === 0 && secondDiff === 1)
    )
  }

  function step(data, stacks, index) {
    const newData = [...data];
    newData.splice(index, 1);
    const newStacks = [...stacks, data[index]];
    return {
      newData,
      newStacks,
    }
  }
}

// console.log(
//   findEnd(oneStepData2, 10, false)
// );


/**
 * 每次可选择+1或者+2， 累计加到n的所有可能
 */
const t = {
  value: 0,
  left: {
    value: 1,
      left: {
        value: 2,
      },
      right: {
        value: 3,
      }
  },
  right: {
    value: 2
  }
};

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

// const a = createTree();

function createTree1(n) {
  let times = 0;

  let tree = {
    value: 0
  };

  /**
   * 根据条件往下延展树
   */
  function createNode(pNode) {
    let current = pNode;
    let parent;

    while (true) {
      if (pNode.value > n) {
        break;
      }


      if (!current.left) {
        current.left = {value: 1 + pNode.value};
        console.log(current.left, 'left');
        current = current.left;
      } else if (!current.right) {
        current.right = {value: 2 + pNode.value};
        current = current.right;
      }

      parent = current

    }
  }

  createNode(tree);

  return times;
}

const b = createTree1(10);
console.log(b, '所有可能');
