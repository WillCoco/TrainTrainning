const data = [2.3, 5, 3, 0, 5, 8, 19, 1];
// 冒泡
function bubbling(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
// bubbling(data);
// console.log(data, 'bubble')

// 快速
function qick(arr1) {
  const arr = [...arr1]
  
  function itrate(list) {
    if (list.length <= 1) {
      return list;
    }
    let small = [];
    let large = [];

    const base = list.splice(0, 1)[0];

    for (let i = 0; i < list.length; i++) {
      if (list[i] < base) {
        small.push(list[i])
      } else {
        large.push(list[i])
      }
    }

    return [...itrate(small), base, ...itrate(large)]
  }
  return itrate(arr)
};
const qickArr = qick(data);
console.log(qickArr, 'bubble')