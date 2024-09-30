// LinkedList.js
import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }
    let temp = this.headNode;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    temp.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let temp = this.headNode;
    while (temp) {
      count++;
      temp = temp.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let temp = this.headNode;
    while (temp && temp.nextNode) {
      temp = temp.nextNode;
    }
    return temp;
  }

  at(index) {
    let temp = this.headNode;
    let count = 0;
    while (temp) {
      if (count === index) return temp;
      temp = temp.nextNode;
      count++;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return;
    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }
    let temp = this.headNode;
    while (temp.nextNode && temp.nextNode.nextNode) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }

  contains(value) {
    let temp = this.headNode;
    while (temp) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let temp = this.headNode;
    let index = 0;
    while (temp) {
      if (temp.value === value) return index;
      temp = temp.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = '';
    let temp = this.headNode;
    while (temp) {
      result += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    return result + 'null';
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    const prevNode = this.at(index - 1);
    if (!prevNode) return;
    newNode.nextNode = prevNode.nextNode;
    prevNode.nextNode = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      this.headNode = this.headNode ? this.headNode.nextNode : null;
      return;
    }
    const prevNode = this.at(index - 1);
    if (!prevNode || !prevNode.nextNode) return;
    prevNode.nextNode = prevNode.nextNode.nextNode;
  }
}
