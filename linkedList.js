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
        //console.log('current node =', currentNode);
       }
    }
    //console.log(currentNode);
    return currentNode;
  }

  //remove(Number)
  //Current, Previous, and Next nodes are the key to this
  function remove(number){
    var previousNode = get(number - 1);
    var currentNode = get(number);

  }

  //insert(Value,Number)
  function insert(){

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