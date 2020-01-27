class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }

  //must be called with array order matching list order
  compareToArray(arr) => {
    let current = this;
    let i = 0;
    while(current){
      if(current.data != arr[i]) return false;
      i++;
      current = current.next;
    }

    return true;
  }

  static buildList(arr){ //[1,2,3]
    let dummy = new Node(null);

    let prev = null;
    let current = 0;

    while(current < arr.length){
      let temp = new Node(arr[current]);
      if(prev){
        prev.next = temp;
      }
      prev = temp;
      current++;
    }

    return dummy.next;
  }

  compareToOtherList(other){
    let thisP = this;
    let otherP = other;

    while(thisP && otherP){
      if(thisP.data != otherP.data) return false;
      thisP = thisP.next;
      otherP = otherP.next;
    }

    if(thisP || otherP) return false;
    
    return true;
  }
}

export default class Node;
