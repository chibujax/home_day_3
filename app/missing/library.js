'strict'
var file = {};
file.findMissing =function(aArray,bArray) {
  if (aArray.length === bArray.length) {
    return 0;
  }
  else {       
    aArray.sort();
    bArray.sort();  
    var len = (aArray.length > bArray.length) ? bArray.length : aArray.length;
    for (var i = 0; i <= len; i++) {
      if(aArray[i] !== bArray[i]) {
        if(aArray[i] === bArray[i + 1]) {
          return bArray[i];
        }
        else {
          return aArray[i];
        }
      }
      else {
        if (aArray.length === i || bArray.length === i) {
          if (bArray[i + 1] !== undefined) {
            return bArray[i + 1];
          }
          else {
            return aArray[i + 1];
          }
        }               
      }
    }
  }
}
module.exports = file;