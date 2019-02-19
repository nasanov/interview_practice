const updateQueue = function (key) {
  let idx = this.q.indexOf(key);
  if (idx >= 0)
      this.q.splice(idx, 1);
}

/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
 this.m = {}; 
 this.q = [];
 this.capacity = capacity;
 this.updateQueue = updateQueue.bind(this);
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  //console.log(`get ${key}`);
  //console.log(this.q);
  if (this.m[key]) {
      this.updateQueue(key);
      this.q.push(key);
      return this.m[key];
  }
  return -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  //console.log(`put ${key}`);
  //console.log(this.q);
  const keys = Object.keys(this.m);
  if (!this.m[key] && keys.length >= this.capacity) {
      let keyToRemove = this.q.shift();
      //console.log(`removing ${keyToRemove}`);
      delete this.m[keyToRemove];
      this.updateQueue(keyToRemove);
  }
  //console.log(this.q);
  this.updateQueue(key);
  this.q.push(key);
  //console.log(this.q);
  this.m[key] = value;
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = Object.create(LRUCache).createNew(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/