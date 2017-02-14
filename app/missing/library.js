'strict'
var file = {};
file.findMissing =function(arr1, arr2) {
     if (arr1.length !== arr2.length){
        for (var i = 0; i < arr1.length; i++) {
            for (var i = 0; i < arr2.length; i++) {
                if (arr1[i] != arr2[i]) {
                    return arr2[i];
                }
            }
        }
    }
    if (arr1.length == arr2.length) {
    	return 0;
    }
}
module.exports = file;