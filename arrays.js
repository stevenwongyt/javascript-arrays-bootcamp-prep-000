var chocolateBars = new Array();
  chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

  function addElementToBeginningOfArray (array, n) {
    return [n, ... array];
  }

  function destructivelyAddElementToBeginningOfArray (array, n) {
    array.unshift(n);
    return array;
  }

  function addElementToEndOfArray (array, n) {
    return [...array, n];
  }

  function destructivelyAddElementToEndOfArray (array, n) {
    return array.push(n);
  }

  function accessElementInAray (array, i) {
    return array[i];
  }

  function destructivelyRemoveElementFromBeginningOfArray (array) {
    return array.shift();
  }

  function removeElementFromBeginningOfArray (array) {
    return array.slice(1);
  }

  function desctructivelyRemoveElementFromEndOfArray (array) {
    array.pop();
    return array;
  }

  function removeElementFromEndOfArray (array) {
    return array.slice(0, array.length-1);
  }
