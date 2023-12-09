let sort = {
    name:true,
    fullname:false,
    race:false,
    gender:false,
    height:false,
    weight:false,
    placeofbirth:false,
    alignement:false
}
// chaque fonction si dessous permettes de comparer a et b et renvoye -1 , 1 , 0 
// en fonction de la situation (elle gere la donner du même nom)
function name(a,b){
    if (a.name == undefined || a.name == null) return 1
    if (b.name == undefined || b.name == null) return -1
    return a.name.localeCompare(b.name)
}
function fullname(a,b){
    if (a.biography.fullName == undefined || a.biography.fullName == null) return 1
    if (b.biography.fullName == undefined || b.biography.fullName == null) return -1
    return a.biography.fullName.localeCompare(b.biography.fullName)
}
function race(a,b){
    if (a.appearance.race == undefined || a.appearance.race == null) return 1
    if (b.appearance.race == undefined || b.appearance.race == null) return -1
    return a.appearance.race.localeCompare(b.appearance.race)
}
function gender(a,b){
    if (a.appearance.gender == undefined || a.appearance.gender == null) return 1
    if (b.appearance.gender == undefined || b.appearance.gender == null) return -1
    return a.appearance.gender.localeCompare(b.appearance.gender)
}
function height(a,b){
    if (a.appearance.height[1] == undefined || a.appearance.height[1] == null) return 1
    if (b.appearance.height[1] == undefined || b.appearance.height[1] == null) return -1
    // return a.appearance.gender.localeCompare(b.appearance.gender)
    // console.log(a.appearance.height[1])
    let heighta = parseFloat(a.appearance.height[1].split(' ')[0]) 
    heighta *= a.appearance.height[1].split(' ')[1] == "cm" ? 1 : 100
    let heightb = parseFloat(b.appearance.height[1].split(' ')[0])
    heightb *= b.appearance.height[1].split(' ')[1] == "cm" ? 1 : 100
    // console.log(heighta,heightb)
    if (heighta < heightb) return -1
    if (heighta > heightb) return 1
    return 0
}
function weight(a,b){
    if (a.appearance.weight[1] == undefined || a.appearance.weight[1] == null) return 1
    if (b.appearance.weight[1] == undefined || b.appearance.weight[1] == null) return -1
    let weighta = parseFloat(a.appearance.weight[1].replaceAll(',','').split(' ')[0]) 
    weighta *= a.appearance.weight[1].split(' ')[1] == "kg" ? 1 : 1000
    let weightb = parseFloat(b.appearance.weight[1].replaceAll(',','').split(' ')[0])
    weightb *= b.appearance.weight[1].split(' ')[1] == "kg" ? 1 : 1000
    if (weighta < weightb) return -1
    if (weighta > weightb) return 1
    return 0
}
function placeofbirth(a,b){
    if (a.biography.placeOfBirth == undefined || a.biography.placeOfBirth == null) return 1
    if (b.biography.placeOfBirth == undefined || b.biography.placeOfBirth == null) return -1
    return a.biography.placeOfBirth.localeCompare(b.biography.placeOfBirth)
}
function alignement(a,b){
    if (a.biography.alignment == undefined || a.biography.alignment == null) return 1
    if (b.biography.alignment == undefined || b.biography.alignment == null) return -1
    return a.biography.alignment.localeCompare(b.biography.alignment)
}
function stats(a,b){
    let statsa = parseFloat(a.powerstats.intelligence)+parseFloat(a.powerstats.strength)+ parseFloat(a.powerstats.speed)+ parseFloat(a.powerstats.durability)+ parseFloat(a.powerstats.power)+ parseFloat(a.powerstats.combat)
    let statsb = parseFloat(b.powerstats.intelligence)+parseFloat(b.powerstats.strength)+ parseFloat(b.powerstats.speed)+ parseFloat(b.powerstats.durability)+ parseFloat(b.powerstats.power)+ parseFloat(b.powerstats.combat)
    if (statsa < statsb) return -1
    if (statsa > statsb) return 1
    return 0
}

// chaque fonction si dessous permettes de renvoyer la table heroes trier
// selon l'ordre demander descroissant et croissant (elle gere la donner du même nom)
export function sortName(tabHeros){
    tabHeros.sort(name)
    // console.log(tabHeros)
    console.log(sort.name)
    sort.name = !sort.name
    sort.fullname = false
    sort.race = false
    sort.gender = false
    sort.height = false
    sort.weight = false
    sort.placeofbirth = false
    sort.alignement = false
    sort.stats = false
    if (!sort.name) tabHeros = tabHeros.reverse()
    return tabHeros
}

export function sortFullName(tabHeros){
    tabHeros.sort(fullname)
    // console.log(tabHeros)
    console.log(sort.name)
    sort.name = false
    sort.fullname = !sort.fullname
    sort.race = false
    sort.gender = false
    sort.height = false
    sort.weight = false
    sort.placeofbirth = false
    sort.alignement = false
    sort.stats = false
    if (!sort.fullname) tabHeros.reverse()
    tabHeros = sorting(tabHeros,(value) => {
        if(!value.biography.fullName || value.biography.fullName == '-' || value.biography.fullName == ' ') return true
        return false
    })
    return tabHeros
}

export function sortRace(tabHeros){
    tabHeros.sort(race)
    // console.log(tabHeros)
    sort.name = false
    sort.fullname = false
    sort.race = !sort.race
    sort.gender = false
    sort.height = false
    sort.weight = false
    sort.placeofbirth = false
    sort.alignement = false
    sort.stats = false
    if (!sort.race) tabHeros.reverse()
    tabHeros = sorting(tabHeros,(value) => {
        if(!value.appearance.race || value.appearance.race == '-' || value.appearance.race == ' ') return true
        return false
    })
    return tabHeros
}

export function sortGender(tabHeros){
    tabHeros.sort(gender)
    // console.log(tabHeros)
    sort.name = false
    sort.fullname = false
    sort.race = false
    sort.gender = !sort.gender
    sort.height = false
    sort.weight = false
    sort.placeofbirth = false
    sort.alignement = false
    sort.stats = false
    if (!sort.gender) tabHeros.reverse()
    tabHeros = sorting(tabHeros,(value) => {
        if(!value.appearance.gender || value.appearance.gender == '-' || value.appearance.gender == ' ') return true
        return false
    })
    return tabHeros
}

export function sortHeight(tabHeros){
    tabHeros.sort(height)
    // console.log(tabHeros)
    sort.name = false
    sort.fullname = false
    sort.race = false
    sort.gender = false
    sort.height = !sort.height
    sort.weight = false
    sort.placeofbirth = false
    sort.alignement = false
    sort.stats = false
    if (!sort.height) tabHeros.reverse()
    tabHeros = sorting(tabHeros,(value) => {
        if(!value.appearance.height[1] || value.appearance.height[1] == '-' || value.appearance.height[1] == ' ') return true
        return false
    })
    return tabHeros
}

export function sortWeight(tabHeros){
    tabHeros.sort(weight)
    // console.log(tabHeros)
    sort.name = false
    sort.fullname = false
    sort.race = false
    sort.gender = false
    sort.height = false
    sort.weight = !sort.weight
    sort.placeofbirth = false
    sort.alignement = false
    sort.stats = false
    if (!sort.weight) tabHeros.reverse()
    tabHeros = sorting(tabHeros,(value) => {
        if(!value.appearance.weight[1] || value.appearance.weight[1] == '-' || value.appearance.weight[1] == ' ') return true
        return false
    })
    return tabHeros
}

export function sortPlaceOfBirth(tabHeros){
    tabHeros.sort(placeofbirth)
    // console.log(tabHeros)
    sort.name = false
    sort.fullname = false
    sort.race = false
    sort.gender = false
    sort.height = false
    sort.weight = false
    sort.placeofbirth = !sort.placeofbirth
    sort.alignement = false
    sort.stats = false
    if (!sort.placeofbirth) tabHeros.reverse()
    tabHeros = sorting(tabHeros,(value) => {
        if(!value.biography.placeOfBirth || value.biography.placeOfBirth == '-' || value.biography.placeOfBirth == ' ') return true
        return false
    })
    return tabHeros
}

export function sortAlignement(tabHeros){
    tabHeros.sort(alignement)
    // console.log(tabHeros)
    sort.name = false
    sort.fullname = false
    sort.race = false
    sort.gender = false
    sort.height = false
    sort.weight = false
    sort.placeofbirth = false
    sort.alignement = !sort.alignement
    sort.stats = false
    if (!sort.alignement) tabHeros.reverse()
    tabHeros = sorting(tabHeros,(value) => {
        if(!value.biography.alignment || value.biography.alignment == '-' || value.biography.alignment == ' ') return true
        return false
    })
    return tabHeros
}

export function sortStats(tabHeros){
    tabHeros.sort(stats)
    sort.name = false
    sort.fullname = false
    sort.race = false
    sort.gender = false
    sort.height = false
    sort.weight = false
    sort.placeofbirth = false
    sort.alignement = false
    sort.stats = !sort.stats 
    if (!sort.stats) tabHeros.reverse()
    return tabHeros
}

// permet de mettre les hero don il manque l'information de la colonne 
// trier actuellement en fin de tab
function sorting(heroes,func){
    let limite = heroes.length
    for (let index = 0;index<limite;index++){
      if(func(heroes[index])){
        let temp = heroes[index]
        heroes.splice(index,1)
        index--
        limite--
        heroes.push(temp)
      }
    }
    return heroes
}
