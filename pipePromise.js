function pipe(promises) {
  return promises.reduce((prevPromise, currentPromise) => {
    return prevPromise.then(result => {
      return currentPromise(result);
    });
  }, Promise.resolve(0));
}
const promise1 = input => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise 1");
      resolve(input + 1);
    }, 1000);
  });
};

const promise2 = input => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise 2");
      resolve(input * 2);
    }, 1000);
  });
};

const promise3 = input => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise 3");
      resolve(input - 1);
    }, 1000);
  });
};

const promises = [promise1, promise2, promise3];

pipe(promises)
  .then(result => {
    console.log("Final result:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
