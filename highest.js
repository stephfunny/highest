class PriorityQueue {
  constructor(cap) {
    this.heap = [];
    this.cap = cap;
  }
}
class Node {
  constructor(id, score) {
    this.score = score;
    this.id = id;
  }
}

PriorityQueue.prototype.insert = function(value, priority) {
  var node = new Node(value, priority);
  this.heap.push(node);
  var currNodeIndex = this.heap.length - 1;
  var currNodeParentIndex = Math.floor(currNodeIndex / 2);
  while (this.heap[currNodeParentIndex] && node.score > this.heap[currNodeParentIndex].score) {
    var parent = this.heap[currNodeParentIndex];
    this.heap[currNodeParentIndex] = node;
    this.heap[currNodeIndex] = parent;
    currNodeIndex = currNodeParentIndex;
    currNodeParentIndex = Math.floor(currNodeIndex / 2);
  }
  if (this.heap.length > this.cap)
    this.heap.pop();
}

const fs = require('fs');
var args = process.argv.slice(2);
var fileName = args[0];
var n = args[1]; // parse this

// console.log(fileName, n);
var q = new PriorityQueue(n);
var arr = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(fileName)
});

lineReader.on('line', function (line) {
  // console.log('Line from file:', typeof line, line);
  var i = line.indexOf(': '); var score = line.substring(0, i); var obj = line.substring(i + 2);
  if (!score || !obj) process.exit(2);
  try {
    json = JSON.parse(obj);
  } catch (err) {
    process.exit(2);
  }
  if (!json.hasOwnProperty('id')) { process.exit(2); }

  // console.log('json id', json.id, score);
  q.insert(json.id, score * 1);
});

lineReader.on('close', function() {
  // console.log('arr', arr);
  console.log(JSON.stringify(q.heap));
  // for (let i = 0; i < q.heap.length; i++) {
    // var node = q.heap[i];
    // console.log(`----{\n"score": ${node.priority},\n"id": "${node.val}"}`);
  // }
  process.exit(0);
})
