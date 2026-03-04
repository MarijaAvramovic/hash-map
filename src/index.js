class HashMap {
  constructor(initialCapacity = 16) {
    this.capacity = initialCapacity;
    this.loadFactor = 0.75;
    this.size = 0;                  // number of actual key-value pairs
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => []);               // each bucket = array of [key, value] pairs
  }


  class  HashMap {
    constructor(parameters) {
        this.capacity = initialCapacity;
        this.loadFactor = 0.75;
    }
hash(key) {
    if (typeof key !== 'string') {
      throw new Error('HashMap only accepts string keys');
    }

    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      // (a * hash + char) % capacity  → prevents overflow
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    // Safety check (should never throw with the above, but good habit)
    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

    return hashCode;
  }
    
    
  }