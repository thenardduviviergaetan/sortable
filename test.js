let test = [1,2,3,4,5,6,7,8,9,10]

let temp = test[5]
test.splice(5,1)
test.push(temp)

console.log(test)