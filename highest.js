var BinaryHeap = require('./binaryHeap.js');
var args = process.argv.slice(2);
var fileName = args[0];
var n = args[1] * 1;


var fs = require('fs').createReadStream(fileName);
fs.on('error', function (err) {
    process.exit(1);
});
 var lineReader = require('readline').createInterface({
  input: fs
 });

var heap = new BinaryHeap(n);

lineReader.on('line', function (line) {
  if (line === "") {
    return;
  }
  var i = line.indexOf(': ');
  var score = line.substring(0, i);
  var dict = line.substring(i + 2);
  if (!score || !dict) {
    process.exit(2);
  }
  try {
    jsonDict = JSON.parse(dict);
  } catch (err) {
    process.exit(2);
  }

  if (!jsonDict.hasOwnProperty('id')) {
    process.exit(2);
  }
  heap.push(jsonDict.id, score * 1);
});

lineReader.on('close', function() {
  var results = [];
  while (heap.size() > 0) {
    results.push(heap.pop());
  }
  console.log(JSON.stringify(results.reverse(), undefined, 4));
  process.exit(0);
})
