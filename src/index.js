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
    
    set(key, value) {
    const index = this.hash(key);

    // Enforce bounds (though hash() already guarantees it)
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];

    // Check if key already exists → update value (overwrite)
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;          // replace old value with new one
        return;                        // done — no size change, no resize
      }
    }

    // Key doesn't exist → add new entry
    bucket.push([key, value]);
    this.size++;
    }

    get(key) {
    const index = this.hash(key);

    // Safety check – enforce valid bucket access
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];

    // Search the bucket (chain) for the matching key
    for (const [storedKey, value] of bucket) {
      if (storedKey === key) {
        return value;
      }
    }

    // Key not found in this bucket → not in the map
    return null;
  }


has(key) {
    const index = this.hash(key);

    // Enforce bounds check (consistent with previous methods)
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];

    // Check if any entry in the bucket has this key
    for (const [storedKey] of bucket) {
      if (storedKey === key) {
        return true;
      }
    }

    // No matching key found
    return false;
  }
  remove(key) {
    const index = this.hash(key);

    // Enforce bounds check (consistent with all other methods)
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    const bucket = this.buckets[index];

    // Search the bucket for the matching key
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        // Found → remove this entry
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    // Key not found in the bucket
    return false;
  }
  
  }