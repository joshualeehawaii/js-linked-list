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
      tail = newNode;
    }
    return newNode;
  }

  //get(Number)
  function get(number){
    var currentNode = head;
    for(i = 0; i < number.length; i++){
      if(currentNode.next === null){
        return false;
      } else {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  //remove(Number)
  function remove(){

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