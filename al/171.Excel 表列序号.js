var titleToNumber = function (title) {
  let res = 0
  for (let i = 0; i < title.length; i++) {
      res = res * 26 + (title.charCodeAt(i) - 65 + 1)
  }
  return res
};
