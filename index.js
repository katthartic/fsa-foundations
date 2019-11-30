const traceTheChain = (obj) => {
  let arrOfProtos = []
  while (Object.getPrototypeOf(obj)) {
    obj = Object.getPrototypeOf(obj)
    arrOfProtos.push(obj)
    //console.log(arrOfProtos)
  }
  return arrOfProtos
}

console.log(traceTheChain([10, 5, 50]))
console.log(traceTheChain("What objects are in my prototype chain?"))