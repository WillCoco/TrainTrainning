/**
 * @author: Xu Ke
 * @date: 2020/3/26 9:58 AM
 * @Description: 深拷贝：
 *  支持拷贝undefined、function、symbol、Date
 * @lastModificationBy:
 * @lastModification:
 * @lastModificationDate:
 */

/**
 * 递归实现
 */

// 深度优先
function cloneDepth(o) {
  function iterateFn(node) {
    if (typeof node === 'object') {
      const wrapper = node.__proto__.constructor();
      for (let key in node) {
        if (node.hasOwnProperty(key)) {
          wrapper[key] = iterateFn(node[key])
        }
      }
      return wrapper;
    }
    return node
  }
  return iterateFn(o)
}

// 广度优先
function cloneBreadth(o) {

  // 负责对每一项操作
  function execFn() {

  }

  // 负责遍历每一项
  function iterateFn(node) {

  }

  return iterateFn(o)
}

/**
 * 非递归
 */



module.exports = {
  cloneDepth,
  cloneBreadth
}
