function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 var newArray = [element, ...array]
 return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return array 
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1)
}

// CHALLENGE: remove an element from the middle of the array/at a given index #
//and return a COPY of the original array, minus that element
//hint = use slice and spread

function nonDestructivelyRemoveAtIndex(array, index) {
  return array.slice(0, array[index])
}