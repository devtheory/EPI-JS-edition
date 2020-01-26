class Stack {
  constructor(){
    this.top = null;
  }

  push(data){
    const temp = new Node(data);

    if(!this.top){
      this.top = temp
    } else {
      temp.next = this.top;
      this.top = temp;
    }
  }

  pop(){
    if(!this.top) return null;
    const temp = this.top;
    this.top = this.top.next;
    return temp;
  }

  empty(){
    return this.top == null;
  }

  peek(){
    return this.top;
  }

  static buildStack(arr) => {
    let stack = new Stack();
    arr.forEach(el => stack.push(el))
    return stack;
  }
}

export default Stack;
