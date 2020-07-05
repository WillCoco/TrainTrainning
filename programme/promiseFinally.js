/**
 * 实现promise.catch
 */
// catch 方法是 then 方法的语法糖，只接受 rejected 态的数据。
Promise.prototype.catch = function (callback) {
  return this.then(null, callback);
};

/**
 * 实现promise.finally
 * finally 方法，无论如何都会走到这里来的。
 * 在 finally 方法里面，不接受成功态或失败态的数据，走一个过场，直接值穿透到下一个里面去。
 * 适合把一些，成功态或失败态都有的逻辑放在这里面。
 */
Promise.prototype.finally = function (callback) {
  return this.then(
    (data) => {
      return Promise.resolve(callback()).then(() => data);
    },
    (err) => {
      return Promise.resolve(callback()).then(() => {
        throw err;
      });
    }
  );
};

new Promise((resolve, reject) => {
  resolve(1);
})
  // .then((res) => {
  //   return res
  // })
  // .catch(console.log)
  .finally((a) => {
    console.log(a, "finally");
  })
  .then((r) => {
    console.log(r, "fff");
  });
