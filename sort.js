function test(array, i, j) {
  self.postMessage(['test', i, j]);

  return array[i] - array[j];
}

function swap(array, i, j) {
  self.postMessage(['swap', i, j]);

  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(a) {
  var n = a.length;
  var sorted;
  for (var i = 0; i < n; i++) {
    sorted = true;
    for (var j = 0; j < n - i - 1; j++) {
      if (test(a, j + 1, j) < 0) {
        sorted = false;
        swap(a, j, j + 1);
      }
    }
    if(sorted == true){
        break;
    }
  }
}




self.onmessage = function(event) {
  var sort = eval(event.data[0]);
  sort(event.data[1], event.data[2]);

  console.log(event.data[1]);
};
