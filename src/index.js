exports.min = function min (array) {
  if(!array || array.length==0) {
    return 0;
  }
   else
    return Math.min.apply(0, array);
}


exports.max = function max (array) {
  if(!array || array.length==0) {
    return 0;
}
 else
    return Math.max.apply(0, array);
}


exports.avg = function avg(array) {
  let number = 0;
  if(!array || array.length==0) {
     return 0;
} 
 else
    for (let i=0; i<array.length; i++) {
      number = number + array[i];
}
    return number/array.length;
}
