function formatString(str) {
  return str.toLowerCase();
}

function emptyArray(arr) {
  return arr.length < 1 || arr == undefined;
}

function emptyObject(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

module.exports = {
  formatString,
  emptyObject,
  emptyArray,
};
