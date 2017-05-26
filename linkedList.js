/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  //setting the head and tail to null
  var head = null;
  var tail = null;

  //getHead()
  function getHead(){
    return head;
  }

  //getTail()
  function getTail(){
    return tail;
  }

  //add(Value)
  function add(value){
    var newNode = { value: value, next: null };
    if(head === null){
      head = newNode;
      tail = newNode;
    } else if (getTail().next === null){
      tail.next = newNode;
      tail = newNode;
    }
    return newNode;
  }

  //get(Number)
  function get(number){
    var nodeCount = 0;
    var currentNode = head;
    for(var i = 0; i < number; i++){
      //console.log('string index =', i);
       if(currentNode.next === null){
         return false;
       } else {
        currentNode = currentNode.next;
        //console.log('current node = ', currentNode);
       }
    }
    //console.log(currentNode);
    return currentNode;
  }

  //remove(Number)
  //current, previous, and next nodes are the key to this
  function remove(number){
    var previousNode = get(number - 1);
    var nextNode = get(number + 1);
    var currentNode = get(number);

    //console.log('current node = ',currentNode.value);
    // console.log('previous node = ', previousNode.value);
    // console.log('needs removed = ',number);
    // console.log('new connection = ', nextNode.value);
    // console.log('head = ', head.value);
    // console.log('tail = ', tail.value);


    //If the list does not contain the number, return false
    if (currentNode === false){
      return false;
    }
    //If number is equal to 0, set the head to the next in the list
    if (number === 0){
      head = nextNode;
      return;
    }
    if (currentNode.next === null){
      previousNode.next = null;
      tail = previousNode;
      } else {
        previousNode.next = nextNode;
        tail = nextNode;
      }
    }

  //insert(Value,Number)
  function insert(value, number){
    console.log('number = ',number);
    console.log('value = ', value);

    var previousNode = get(number - 1);
    var nextNode = get(number + 1);
    var currentNode = get(number);

    console.log('previous node = ',previousNode.value);
    console.log('next node = ', nextNode.value);
    console.log('currentNode = ', currentNode.value);

    if (number === 0){
      head = currentNode;
    }
    for (var i = 0; i < number; i++){

      console.log('***previous node next = ', previousNode.next);
      previousNode.next = currentNode;

      console.log('***current node next = ', currentNode.next);
      currentNode.next = nextNode;
    }



  }
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert:insert
  };
}
linkedListGenerator();