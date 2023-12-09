export function checker(filtre,test,value){
    let regex = new RegExp(test,"i")
    switch (filtre) {
      case "name":
        return value.name.match(regex)
      case "race":
        return (value.appearance.race !== null && value.appearance.race !== undefined) ? value.appearance.race.match(regex) : true
      case "gender":
        return value.appearance.gender !== null && value.appearance.gender !== undefined ? value.appearance.gender.match(regex) : true
      case "max-height":
        return value.appearance.height[1] !== null && value.appearance.height[1] !== undefined ? parseInt(value.appearance.height[1].split(' ')[0].replace("cm","")) <= parseInt(test) : true
      case "max-weight":
        return value.appearance.weight[1] !== null && value.appearance.weight[1] !== undefined ? parseInt(value.appearance.weight[1].split(' ')[0].replace("kg","")) <= parseInt(test) : true
      case "placeofbirth":
        return value.biography.placeOfBirth !== null && value.biography.placeOfBirth !== undefined ? value.biography.placeOfBirth.match(regex) : true
      case "alignement":
        // console.log(value.biography.alignment.match(regex))
        return value.biography.alignment !== null && value.biography.alignment !== undefined ? value.biography.alignment.match(regex) : true
      case "!name":
        return value.name.match(regex)
      case "!race":
        return (value.appearance.race !== null && value.appearance.race !== undefined) ? true : value.appearance.race.match(regex)
      case "!gender":
        return value.appearance.gender !== null && value.appearance.gender !== undefined ? true : value.appearance.gender.match(regex) 
    //   case "!max-height":
    //     return value.appearance.height[1] !== null && value.appearance.height[1] !== undefined ? parseInt(value.appearance.height[1].split(' ')[0].replace("cm","")) <= parseInt(test) : true
    //   case "!max-weight":
    //     return value.appearance.weight[1] !== null && value.appearance.weight[1] !== undefined ? parseInt(value.appearance.weight[1].split(' ')[0].replace("kg","")) <= parseInt(test) : true
      case "!placeofbirth":
        return value.biography.placeOfBirth !== null && value.biography.placeOfBirth !== undefined ? true : value.biography.placeOfBirth.match(regex)
      case "!alignement":
        // console.log(value.biography.alignment.match(regex))
        return value.biography.alignment !== null && value.biography.alignment !== undefined ? true : value.biography.alignment.match(regex)
      default:
        return true
    }
  }

export function checkDataList(research){
    // if (research!="") research+= " "
    const dataList = document.querySelector("#filter-tag")
    while (dataList.firstChild) {
      dataList.removeChild(dataList.firstChild);
    }
    if (!research.match(" ") && research!="" || research.split(" ").length != research.split(":").length) return
    // if (research!="") console.log(research.split(" ").length , research.split(":").length)
    if (!research.match("Name:")) dataList.appendChild(newdata(research + "Name:"))
    if (!research.match("Race:")) dataList.appendChild(newdata(research + "Race:"))
    if (!research.match("Gender:")) dataList.appendChild(newdata(research + "Gender:"))
    if (!research.match("Max-Height:")) dataList.appendChild(newdata(research + "Max-Height:"))
    if (!research.match("Max-Weight:")) dataList.appendChild(newdata(research + "Max-Weight:"))
    if (!research.match("PlaceOfBirth:")) dataList.appendChild(newdata(research + "PlaceOfBirth:"))
    if (!research.match("Alignement:")) dataList.appendChild(newdata(research + "Alignement:"))
  }

  function newdata(str){
    let data = document.createElement("option")
    data.value = str
    return data
  }

// export function Isvide(value){
//     if(!value.appearance.race        || value.appearance.race == '-' || value.appearance.race == ' ') return true
//     if(!value.appearance.gender      || value.appearance.gender == '-' || value.appearance.gender == '') return true
//     if(!value.appearance.height[1]   || value.appearance.height[1] == '-' || value.appearance.height[1] == '') return true
//     if(!value.appearance.weight[1]   || value.appearance.weight[1] == '-' || value.appearance.weight[1] == '') return true
//     if(!value.biography.placeOfBirth || value.biography.placeOfBirth == '-' || value.biography.placeOfBirth == '') return true
//     if(!value.biography.alignment    || value.biography.alignment == '-' || value.biography.alignment == '') return true
//     return false
//   }