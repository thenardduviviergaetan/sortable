import { checker , checkDataList } from './checker.js'
// return la table des different hero qui correspond a la recherche
export function checkFilter(heroes){
    let final = [...heroes]
    // ici je split la recherche pour recuperer les differents tag pour
    // trouver ce qui est rechercher
    let filter = document.querySelector("#filter").value.split(' ')
    //permet d'initier / modifier la datalist de la searchbar
    checkDataList(filter.join(' '))
    for (let i = 0;i < filter.length;i++){
      let test = filter[i].split(":")
      if (test.length != 2){
        test = ["name",test[0]]
      }
      test[0] = test[0].toLowerCase()
      let temp = []
      if (test[1] !== ""){
        for (let index = 0;index<final.length;index++){
            // verifie si le hero correspond au tag tester et l'ajout 
            // le cas echeant
          if (checker(test[0],test[1],final[index])){
            temp.push(final[index])
          }
        }
        final = temp
      }
    }
    return final
  }