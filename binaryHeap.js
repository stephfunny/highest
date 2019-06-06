function Node(id, score) {
  this.score = score;
  this.id = id;
}

function BinaryHeap(cap){
  this.content = [];
  this.cap = cap;
}

BinaryHeap.prototype = {
  push: function(id, score) {
    this.content.push(new Node(id, score));
    this.bubbleUp(this.content.length - 1);

    if (this.size() > this.cap) {
      this.pop();
    }
  },

  pop: function() {
    var result = this.content[0];
    var end = this.content.pop();
    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    }
    return result;
  },

  size: function() {
    return this.content.length;
  },

  bubbleUp: function(n) {
    var element = this.content[n];
    var score = element.score;
    while (n > 0) {
      var parentN = Math.floor((n + 1) / 2) - 1,
      parent = this.content[parentN];
      if (score >= parent.score)
        break;
      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  },

  sinkDown: function(n) {
    var length = this.content.length,
    element = this.content[n],
    elemScore = element.score;

    while (true) {
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      var swap = null;
      if (child1N < length) {
        var child1 = this.content[child1N],
        child1Score = child1.score;
        if (child1Score < elemScore)
          swap = child1N;
      }
      if (child2N < length) {
        var child2 = this.content[child2N],
        child2Score = child2.score;
        if (child2Score < (swap == null ? elemScore : child1Score))
          swap = child2N;
      }

      if (swap == null) break;
      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
};

module.exports = BinaryHeap;
