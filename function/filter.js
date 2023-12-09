import { checker , checkDataList } from './checker.js'

export function checkFilter(heroes){
    let final = [...heroes]
    let filter = document.querySelector("#filter").value.split(' ')
    checkDataList(filter.join(' '))
    // console.log(filter)
    for (let i = 0;i < filter.length;i++){
      let test = filter[i].split(":")
      if (test.length != 2){
        test = ["name",test[0]]
      }
      test[0] = test[0].toLowerCase()
      let temp = []
      // console.log(test)
      if (test[1] !== ""){
        for (let index = 0;index<final.length;index++){
          // if (final[index][test[0]].match(new RegExp(test[1],"i"))){
          if (checker(test[0],test[1],final[index])){
            temp.push(final[index])
          }
        }
        final = temp
      }
    }
    return final
  }