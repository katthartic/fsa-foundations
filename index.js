const test = {
	a:1,
	b:2,
  c:3
}

const traceTheChain = (obj) => {
  let arrOfProtos = []
  while (Object.getPrototypeOf(obj)) {
    obj = Object.getPrototypeOf(obj)
    arrOfProtos.push(obj)
    console.log(arrOfProtos)
  }
  return arrOfProtos
}