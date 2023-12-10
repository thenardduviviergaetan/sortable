import { newdata } from "./new.js"
// return true or false en fonction de si le personnage respecte le filtre tester
export function checker(filtre,test,value) {
    let regex = new RegExp(test,"i")
    let aproRegex = new RegExp(test.split('').join('?'),'i')
    switch (filtre) {
        case "name":
            return value.name.match(regex)
        case "race":
            return (value.appearance.race !== null && value.appearance.race !== undefined) ? value.appearance.race.match(regex) : true
        case "gender":
            return value.appearance.gender !== null && value.appearance.gender !== undefined ? value.appearance.gender.match(regex) : true
        case "placeofbirth":
            return value.biography.placeOfBirth !== null && value.biography.placeOfBirth !== undefined ? value.biography.placeOfBirth.match(regex) : true
        case "alignement":
            return value.biography.alignment !== null && value.biography.alignment !== undefined ? value.biography.alignment.match(regex) : true
        case "!name":
            return !value.name.match(regex)
        case "!race":
            return (value.appearance.race !== null && value.appearance.race !== undefined) ? !value.appearance.race.match(regex) : true
        case "!gender":
            return value.appearance.gender !== null && value.appearance.gender !== undefined ? !value.appearance.gender.match(regex) : true
        case "!placeofbirth":
            return value.biography.placeOfBirth !== null && value.biography.placeOfBirth !== undefined ? !value.biography.placeOfBirth.match(regex) : true
        case "!alignement":
            return value.biography.alignment !== null && value.biography.alignment !== undefined ? !value.biography.alignment.match(regex) : true
        case "~name":
            return value.name.match(aproRegex)
        case "~race":
            return (value.appearance.race !== null && value.appearance.race !== undefined) ? value.appearance.race.match(aproRegex) : true
        case "~gender":
            return value.appearance.gender !== null && value.appearance.gender !== undefined ? value.appearance.gender.match(aproRegex) : true
        case "~placeofbirth":
            return value.biography.placeOfBirth !== null && value.biography.placeOfBirth !== undefined ? value.biography.placeOfBirth.match(aproRegex) : true
        case "~alignement":
            return value.biography.alignment !== null && value.biography.alignment !== undefined ? value.biography.alignment.match(aproRegex) : true
        case "max-height":
            // return value.appearance.height[1] !== null && value.appearance.height[1] !== undefined ? parseInt(value.appearance.height[1].split(' ')[0].replace("cm","")) <= parseInt(test) : true
            return value.appearance.height[1] !== null && value.appearance.height[1] !== undefined ? height(value) <= parseInt(test) : true
        case "max-weight":
            // return value.appearance.weight[1] !== null && value.appearance.weight[1] !== undefined ? parseInt(value.appearance.weight[1].split(' ')[0].replace("kg","")) <= parseInt(test) : true
            return value.appearance.weight[1] !== null && value.appearance.weight[1] !== undefined ? weight(value) <= parseInt(test) : true
        case "min-height":
            return value.appearance.height[1] !== null && value.appearance.height[1] !== undefined ? height(value) >= parseInt(test) : true
        case "min-weight":
            return value.appearance.weight[1] !== null && value.appearance.weight[1] !== undefined ? weight(value) >= parseInt(test) : true
        case "equal-height":
            return value.appearance.height[1] !== null && value.appearance.height[1] !== undefined ? height(value) == parseInt(test) : true
        case "equal-weight":
            return value.appearance.weight[1] !== null && value.appearance.weight[1] !== undefined ? weight(value) == parseInt(test) : true
        case "!equal-height":
            return value.appearance.height[1] !== null && value.appearance.height[1] !== undefined ? height(value) != parseInt(test) : true
        case "!equal-weight":
            return value.appearance.weight[1] !== null && value.appearance.weight[1] !== undefined ? weight(value) != parseInt(test) : true
        default:
            return true
    }
  }

//remplis la datalist qui propose les different filtre utilisable dans la searchbar
export function checkDataList(research){
    // if (research!="") research+= " "
    const dataList = document.querySelector("#filter-tag")
    if (!research.match(" ") && research!="" || research.split(" ").length != research.split(":").length) return
    while (dataList.firstChild) {
      dataList.removeChild(dataList.firstChild);
    }
    if (!research.match("Name:")) dataList.appendChild(newdata(research + "Name:"))
    if (!research.match("!Name:")) dataList.appendChild(newdata(research + "!Name:"))
    if (!research.match("~Name:")) dataList.appendChild(newdata(research + "~Name:"))
    if (!research.match("Race:")) dataList.appendChild(newdata(research + "Race:"))
    if (!research.match("!Race:")) dataList.appendChild(newdata(research + "!Race:"))
    if (!research.match("~Race:")) dataList.appendChild(newdata(research + "~Race:"))
    if (!research.match("Gender:")) dataList.appendChild(newdata(research + "Gender:"))
    if (!research.match("!Gender:")) dataList.appendChild(newdata(research + "!Gender:"))
    if (!research.match("~Gender:")) dataList.appendChild(newdata(research + "~Gender:"))
    if (!research.match("Max-Height:")) dataList.appendChild(newdata(research + "Max-Height:"))
    if (!research.match("Max-Weight:")) dataList.appendChild(newdata(research + "Max-Weight:"))
    if (!research.match("Min-Height:")) dataList.appendChild(newdata(research + "Min-Height:"))
    if (!research.match("Min-Weight:")) dataList.appendChild(newdata(research + "Min-Weight:"))
    if (!research.match("Equal-Height:")) dataList.appendChild(newdata(research + "Equal-Height:"))
    if (!research.match("Equal-Weight:")) dataList.appendChild(newdata(research + "Equal-Weight:"))
    if (!research.match("!Equal-Height:")) dataList.appendChild(newdata(research + "!Equal-Height:"))
    if (!research.match("!Equal-Weight:")) dataList.appendChild(newdata(research + "!Equal-Weight:"))
    if (!research.match("PlaceOfBirth:")) dataList.appendChild(newdata(research + "PlaceOfBirth:"))
    if (!research.match("!PlaceOfBirth:")) dataList.appendChild(newdata(research + "!PlaceOfBirth:"))
    if (!research.match("~PlaceOfBirth:")) dataList.appendChild(newdata(research + "~PlaceOfBirth:"))
    if (!research.match("Alignement:")) dataList.appendChild(newdata(research + "Alignement:"))
    if (!research.match("!Alignement:")) dataList.appendChild(newdata(research + "!Alignement:"))
    if (!research.match("~Alignement:")) dataList.appendChild(newdata(research + "~Alignement:"))
  }

//return la taille en cm du personnage
function height(personage){
    let height = parseFloat(personage.appearance.height[1].split(' ')[0]) 
    height *= personage.appearance.height[1].split(' ')[1] == "cm" ? 1 : 100
    return height
}
//return le poids en kg du personnage
function weight(personage){
    let weight = parseFloat(personage.appearance.weight[1].split(' ')[0]) 
    weight *= personage.appearance.weight[1].split(' ')[1] == "kg" ? 1 : 1000
    return weight
}

