var chocolateBars = new Array();
  chocolateBars = [snickers, hundred grand, kitkat, skittles];

  function addElementToBeginningOfArray (array, n) {
    return [n, ... array];
  }

  function destructivelyAddElementToEndOfArray (array, n) {
    return array.unshift(n);
  }
