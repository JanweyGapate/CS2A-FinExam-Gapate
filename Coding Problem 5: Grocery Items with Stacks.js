
class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  push(item) {
    this.items.push(item);
    console.log("Stack after push:", this.items);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Create a Stack instance
const groceryStack = new Stack();

// Get grocery items from the user
for (let i = 0; i < 5; i++) {
  const item = prompt("Enter grocery item " + (i + 1) + ":");
  groceryStack.push(item);
}

// Remove an item from the stack
const removedItem = groceryStack.pop();
console.log("Removed item:", removedItem);
