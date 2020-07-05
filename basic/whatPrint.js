var b = 10;

(function() {
  this.b = 20;
  // console.log(b)
  // console.log(this.b)
})();

// 异步
const delay = (ms) => new Promise(function(resolve) {
  setTimeout(function() {
    return resolve();
  }, ms);
})

// console.log(delay(3000));

async function main() {
  console.time('1');
  await delay(3000);
  await delay(3000);
  console.timeEnd('1');
}

async function main1() {
  console.time('2');
  // const d1 = delay(3000);
  const d2 = delay(1000);
  const d3 = delay(2000);
  // await d1;
  await d2;
  await d3;
  console.timeEnd('2');
}

main();
