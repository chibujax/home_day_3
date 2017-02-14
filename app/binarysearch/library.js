Array.prototype.toTwenty = function() {
  var oneToTwenty = [];
  for (var i = 1; i <= 20; i++) {
    oneToTwenty.push(i);
  }
  return oneToTwenty;
};

Array.prototype.toForty = function() {
  var twoToForty = [];
  for (var i = 2; i <= 40; i+=2) { 
    twoToForty.push(i);
  }
  return twoToForty;
};

Array.prototype.toOneThousand = function() {
  var tenToOneThousand = [];
  for (var i = 10; i <= 1000; i+=10) {
      tenToOneThousand.push(i);
  }
  return tenToOneThousand;
};

Array.prototype.search = function (n) {

  /*mnSai = 'minimum Sub Array Index',
    mxSai = 'maximum Sub Array Index',
    cSai = 'current Sub Array Index'.*/

  var mxSai = this.length - 1;
  var mnSai = 0;
  var cSai;

  var search = {
    count: 0,
    index: cSai,
    length: this.length
  };

  while (mnSai <= mxSai) {
    cSai = (mnSai + mxSai) / 2 | 0;  // "|"" Performs faster than Math.floor
    if (this[mnSai] === n || this[mxSai] === n) {
      if (this[mxSai] === n) {
        search.index = mxSai;
      }
      else {
        search.index = mnSai;
      }
      return search;
    }
    
    if (this[cSai] < n) {
      mnSai = cSai + 1;
      mxSai--;
    }
    else if (this[cSai] > n) {
      mxSai = cSai - 1;
      mnSai++;
    }
    else {
      search.index = cSai;
      return search;
    }
    search.count++;
  }
  search.index = -1;
  return search;
};