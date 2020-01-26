class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){
        const newNode = new Node(data);
        if(this.tail == null){//q is empty
            this.head = newNode;
            this.tail = newNode;
        }
        //q is not empty
        this.tail.next = newNode;
        this.tail = newNode;
    }

    remove(){
        if(this.tail == null) return null; //list is empty
        let temp = this.head;

        if(this.head == this.tail){ //removing last item
            this.head = null;
            this.tail = null;
        } else {//there are multiple nodes in list
            this.head = temp.next;
        }

        return temp;
    }

    empty(){
      this.peek() == null;
    }

    peek(){
      return this.head;
    }
}

export default Queue;
