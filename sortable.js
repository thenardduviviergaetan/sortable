// console.log("test")
let amin = 0;
let amax = 20;
let nbhero=0;
let cacheHeros = [];

const newcol = (str) => {
    let content = document.createElement("th")
    content.textContent = str
    return content
}
const newimg = (str) => {
    let content = document.createElement("th")
    let img = document.createElement("img")
    img.src = str
    content.appendChild(img)
    return content
}
// const newbtn = (btn) => {
//   let content = document.createElement("th")
//   content.appendChild(btn)
//   return content
// }

const loadData = (heroes,max) => {
  heroes = checkFilter(heroes)
  cacheHeros = sorting(heroes)
  // cacheHeros = heroes
  nbhero = cacheHeros.length
    amax = (typeof max !== 'number'|| heroes.length < max) ? heroes.length : max
    let element = document.getElementById('table-heroes')
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let index=amin
    let table = document.createElement("table")
    element.appendChild(table)
    let thead = document.createElement("thead")
    table.appendChild(thead)
    thead.appendChild(newcol("Screen"))
    const test = () => console.log("find")
    thead.appendChild(newcol("Name"))
    thead.lastChild.addEventListener("click",test)
    thead.appendChild(newcol("Race"))
    thead.lastChild.addEventListener("click",test)
    thead.appendChild(newcol("Gender"))
    thead.lastChild.addEventListener("click",test)
    thead.appendChild(newcol("Height"))
    thead.lastChild.addEventListener("click",test)
    thead.appendChild(newcol("Weight"))
    thead.lastChild.addEventListener("click",test)
    thead.appendChild(newcol("PlaceOfBirth"))
    thead.lastChild.addEventListener("click",test)
    thead.appendChild(newcol("Alignement"))
    thead.lastChild.addEventListener("click",test)
    // thead.appendChild(newcol("Fiche"))
    let tbody = document.createElement("tbody")
    table.appendChild(tbody)
    for (index;index<amax;index++){
        let hero = document.createElement("tr")
        hero.id = index
        // let btn = document.createElement("button")
        // btn.id = index
        hero.addEventListener("click",() => {
          console.log(cacheHeros[hero.id])
          let fiche = window.open("","","toolbar=no,width=400, height=800");
          
          fiche.document.writeln('<html>');
          fiche.document.writeln('<head>');
          fiche.document.writeln('<title>'+cacheHeros[hero.id].name+'</title>');
          fiche.document.writeln('</head>');
          fiche.document.writeln('<body>')
          fiche.document.writeln('<table>')
          fiche.document.writeln('<thead>')
          fiche.document.writeln('<tr><th>'+cacheHeros[hero.id].name+'</th></tr>')
          fiche.document.writeln('<tr><th><img src="'+cacheHeros[hero.id].images.sm+'"></th></tr>')
          fiche.document.writeln('</thead>')
          fiche.document.writeln('<tbody>')
          fiche.document.writeln('<tr><th></th><th></th></tr>')
          fiche.document.writeln('</tbody>')
        })
        // btn.id = index
        // btn.textContent = "GO"
        // btn.appendChild(hero)
        // btn.appendChild(newimg(heroes[index].images.xs))
        // hero.appendChild(btn)

        hero.appendChild(newimg(cacheHeros[index].images.xs))
        hero.appendChild(newcol(cacheHeros[index].name))
        hero.appendChild(newcol(cacheHeros[index].appearance.race))
        hero.appendChild(newcol(cacheHeros[index].appearance.gender))
        hero.appendChild(newcol(cacheHeros[index].appearance.height[1]))
        hero.appendChild(newcol(cacheHeros[index].appearance.weight[1]))
        hero.appendChild(newcol(cacheHeros[index].biography.placeOfBirth))
        hero.appendChild(newcol(cacheHeros[index].biography.alignment))

        // hero.appendChild(newimg(heroes[index].images.xs))
        // hero.appendChild(newcol(heroes[index].name))
        // hero.appendChild(newcol(heroes[index].appearance.race))
        // hero.appendChild(newcol(heroes[index].appearance.gender))
        // hero.appendChild(newcol(heroes[index].appearance.height[1]))
        // hero.appendChild(newcol(heroes[index].appearance.weight[1]))
        // hero.appendChild(newcol(heroes[index].biography.placeOfBirth))
        // hero.appendChild(newcol(heroes[index].biography.alignment))



        // hero.appendChild(newbtn(btn))
        tbody.appendChild(hero)
        // tbody.appendChild(btn)
    }
  }
const insert = document.querySelector("#nb");
insert.addEventListener("click", () => {
  const positionSelect = insert
  amin = 0;
  amax = (positionSelect.value !== "all results") ? parseInt(positionSelect.value) : positionSelect.value
  document.querySelector("#pos").textContent = `${amin} - ${amax}`
  render(amax)
  // fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then((heroes) => loadData(heroes,amax))
});
const filter = document.querySelector("#filter");
filter.addEventListener("keydown", ()=> {
  amin = 0;
  amax = parseInt(document.querySelector("#nb").value)
  document.querySelector("#pos").textContent = `${amin} - ${amax}`
  render(amax)
  // fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then((heroes) => loadData(heroes,amax))
});
const left = document.querySelector("#left");
left.addEventListener("click", ()=> {
  if(amax == nbhero){
    amax = amin
    amin -= parseInt(document.querySelector("#nb").value)
  }else if (amin != 0){
    amin -= parseInt(document.querySelector("#nb").value)
    amax -= parseInt(document.querySelector("#nb").value)
  }
  document.querySelector("#pos").textContent = `${amin} - ${amax}`
  render(amax)
  // fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then((heroes) => loadData(heroes,amax))
});
const right = document.querySelector("#right");
right.addEventListener("click", ()=> {
  if (amax < nbhero){
    console.log("<")
    amin += parseInt(document.querySelector("#nb").value)
    amax += parseInt(document.querySelector("#nb").value)
  }else if (amax > nbhero){
    amin += parseInt(document.querySelector("#nb").value)
    amax = tab.length
  }
  document.querySelector("#pos").textContent = `${amin} - ${amax}`
  render(amax)
  // fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then((heroes) => loadData(heroes,amax))
});

function newdata(str){
  let data = document.createElement("option")
  data.value = str
  return data
}

function dataList(research){
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

function checkFilter(heroes){
  let final = [...heroes]
  let filter = document.querySelector("#filter").value.split(' ')
  dataList(filter.join(' '))
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

function checker(filtre,test,value){
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
    default:
      return true
  }
}

function sorting(heroes){
  let limite = heroes.length
  for (let index = 0;index<limite;index++){
    if(Isvide(heroes[index])){
      let temp = heroes[index]
      heroes.splice(index,1)
      index--
      limite--
      heroes.push(temp)
    }
  }
  return heroes
}

function Isvide(value){
  if(!value.appearance.race        || value.appearance.race == '-' || value.appearance.race == ' ') return true
  if(!value.appearance.gender      || value.appearance.gender == '-' || value.appearance.gender == '') return true
  if(!value.appearance.height[1]   || value.appearance.height[1] == '-' || value.appearance.height[1] == '') return true
  if(!value.appearance.weight[1]   || value.appearance.weight[1] == '-' || value.appearance.weight[1] == '') return true
  if(!value.biography.placeOfBirth || value.biography.placeOfBirth == '-' || value.biography.placeOfBirth == '') return true
  if(!value.biography.alignment    || value.biography.alignment == '-' || value.biography.alignment == '') return true
  return false
}

function render(amax){
  fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then((heroes) => loadData(heroes,amax))
}
dataList("")
render(20)