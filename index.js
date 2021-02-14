// Add your functions here

function map(array, block){
  const newArray = []
  array.forEach(e => {
    newArray.push(block(e))
  })
  return newArray
}

function reduce(array, block, start){
  debugger
  if (start){
    let result = start
  }else{
    let result = 0
  }
  array.forEach(e => {
    result += block(e) 
  })
  return result
}