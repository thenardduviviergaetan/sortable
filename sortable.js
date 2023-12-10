// console.log("test")
let amin = 0;
let amax = 20;
let nbhero=0;
let cacheHeros = [];

import { checkFilter } from './function/filter.js';
import { checkDataList } from './function/checker.js';
import { sortGender,sortName,sortRace,sortFullName, sortHeight, sortWeight, sortPlaceOfBirth, sortAlignement, sortStats } from './function/sort.js';
import { newcol , newimg, newline } from './function/new.js';

// permet d'inserer les donner des heros dans la page
const loadData = (heroes,max) => {
  // checkFilter retourne un tableaux de hero qui corespond a la recherche 
  cacheHeros = checkFilter(heroes)
  // cacheHeros = sorting(heroes)
  nbhero = cacheHeros.length
    // amax = (typeof max !== 'number'|| heroes.length < max) ? heroes.length : max
    amax = (typeof max !== 'number'|| nbhero < max) ? nbhero : max
    document.querySelector("#pos").textContent = `${amin} - ${amax}`
    let element = document.getElementById('table-heroes')
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    // function acceptant une fonction de trie en entrer elle permet
    // de mettre en place le trie des différente colonne
    const addEvent = (func) => {
      thead.lastChild.addEventListener("click",()=>{
      cacheHeros = func(cacheHeros)
      if (document.querySelector("#nb").value != "all results") {
        amin = 0;
        amax = parseInt(document.querySelector("#nb").value)
        // document.querySelector("#pos").textContent = `${amin} - ${amax}`
      }
      loadData(cacheHeros,amax)
    })}

    let index=amin
    //creation de la table et de la tête des colonne ainsi que lors fonction
    let table = document.createElement("table")
    element.appendChild(table)
    let thead = document.createElement("thead")
    table.appendChild(thead)
    thead.appendChild(newcol("Screen"))
    thead.appendChild(newcol("Name"))
    addEvent(sortName)
    // thead.lastChild.addEventListener("click",()=>{
    //   cacheHeros = sortName(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    thead.appendChild(newcol("Full Name"))
    addEvent(sortFullName)
    // thead.lastChild.addEventListener("click",()=>{
    //   cacheHeros = sortFullName(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    thead.appendChild(newcol("Stats"))
    addEvent(sortStats)
    // thead.lastChild.addEventListener("click",()=>{
    //   cacheHeros = sortStats(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    thead.appendChild(newcol("Race"))
    addEvent(sortRace)
    // thead.lastChild.addEventListener("click",()=>{
    //   cacheHeros = sortRace(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    thead.appendChild(newcol("Gender"))
    addEvent(sortGender)
    // thead.lastChild.addEventListener("click",()=>{
    //   // console.log("test")
    //   cacheHeros = sortGender(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    thead.appendChild(newcol("Height"))
    addEvent(sortHeight)
    // thead.lastChild.addEventListener("click",()=>{
    //   // console.log("test")
    //   cacheHeros = sortHeight(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    thead.appendChild(newcol("Weight"))
    addEvent(sortWeight)
    // thead.lastChild.addEventListener("click",()=>{
    //   // console.log("test")
    //   cacheHeros = sortWeight(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    thead.appendChild(newcol("PlaceOfBirth"))
    addEvent(sortPlaceOfBirth)
    // thead.lastChild.addEventListener("click",()=>{
    //   // console.log("test")
    //   cacheHeros = sortPlaceOfBirth(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    thead.appendChild(newcol("Alignement"))
    addEvent(sortAlignement)
    // thead.lastChild.addEventListener("click",()=>{
    //   // console.log("test")
    //   cacheHeros = sortAlignement(cacheHeros)
    //   if (document.querySelector("#nb").value != "all results") {
    //     amin = 0;
    //     amax = parseInt(document.querySelector("#nb").value)
    //     // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    //   }
    //   loadData(cacheHeros,amax)
    // })
    let tbody = document.createElement("tbody")
    table.appendChild(tbody)

    //insertion des information des heros selectioner et stocker dans la table cacheheros
    for (index;index<amax;index++){
        let hero = document.createElement("tr")
        hero.id = index
        // permet de créer en cliquant sur la ligne une fenetre contenant la fiche du personage 
        hero.addEventListener("click",() => {
          console.log(cacheHeros[hero.id])
          let fiche = window.open("","","toolbar=no,width=400, height=800,resizable=non");
          fiche.moveBy(screen.width/2-200,screen.height/2-400)
          fiche.document.writeln('<html>');
          fiche.document.writeln('<head>');
          fiche.document.writeln('<title>'+cacheHeros[hero.id].name+'</title>');
          fiche.document.writeln('<link rel="stylesheet" href="css/style.css">')
          fiche.document.writeln('</head>');
          fiche.document.writeln('<body>')
          fiche.document.writeln('<table>')
          fiche.document.writeln('<thead>')
          fiche.document.writeln('<tr><th colspan="2">'+cacheHeros[hero.id].name+'</th></tr>')
          fiche.document.writeln('<tr><th colspan="2">'+cacheHeros[hero.id].biography.fullName+'</th></tr>')
          fiche.document.writeln('<tr><th colspan="2"><img src="'+cacheHeros[hero.id].images.sm+'"></th></tr>')
          fiche.document.writeln('</thead>')
          fiche.document.writeln('<tbody>')
          fiche.document.writeln('<tr><th colspan="2">Stats</th></tr>')
          fiche.document.writeln('<tr><th>Intelligence</th><th>'+cacheHeros[hero.id].powerstats.intelligence+'</th></tr>')
          fiche.document.writeln('<tr><th>Strength</th><th>'+cacheHeros[hero.id].powerstats.strength+'</th></tr>')
          fiche.document.writeln('<tr><th>Speed</th><th>'+cacheHeros[hero.id].powerstats.speed+'</th></tr>')
          fiche.document.writeln('<tr><th>Durability</th><th>'+cacheHeros[hero.id].powerstats.durability+'</th></tr>')
          fiche.document.writeln('<tr><th>Power</th><th>'+cacheHeros[hero.id].powerstats.power+'</th></tr>')
          fiche.document.writeln('<tr><th>Combat</th><th>'+cacheHeros[hero.id].powerstats.combat+'</th></tr>')
          fiche.document.writeln('<tr><th colspan="2">Information</th></tr>')
          fiche.document.writeln('<tr><th>Race</th><th>'+cacheHeros[hero.id].appearance.race+'</th></tr>')
          fiche.document.writeln('<tr><th>Gender</th><th>'+cacheHeros[hero.id].appearance.gender+'</th></tr>')
          fiche.document.writeln('<tr><th>Height</th><th>'+cacheHeros[hero.id].appearance.height[1]+'</th></tr>')
          fiche.document.writeln('<tr><th>Weight</th><th>'+cacheHeros[hero.id].appearance.weight[1]+'</th></tr>')
          fiche.document.writeln('<tr><th>PlaceOfBirth</th><th>'+cacheHeros[hero.id].biography.placeOfBirth+'</th></tr>')
          fiche.document.writeln('<tr><th>Alignment</th><th>'+cacheHeros[hero.id].biography.alignment+'</th></tr>')
          fiche.document.writeln('</tbody>')
        })

        hero.appendChild(newimg(cacheHeros[index].images.xs))
        hero.appendChild(newcol(cacheHeros[index].name))
        hero.appendChild(newcol(cacheHeros[index].biography.fullName))
        let stats = document.createElement("th")
        stats.appendChild(newline("intelligence : "+cacheHeros[index].powerstats.intelligence))
        stats.appendChild(newline("strength : "+cacheHeros[index].powerstats.strength))
        stats.appendChild(newline("speed : "+cacheHeros[index].powerstats.speed))
        stats.appendChild(newline("durability : "+cacheHeros[index].powerstats.durability))
        stats.appendChild(newline("power : "+cacheHeros[index].powerstats.power))
        stats.appendChild(newline("combat : "+cacheHeros[index].powerstats.combat))
        hero.appendChild(stats)
        hero.appendChild(newcol(cacheHeros[index].appearance.race))
        hero.appendChild(newcol(cacheHeros[index].appearance.gender))
        hero.appendChild(newcol(cacheHeros[index].appearance.height[1]))
        hero.appendChild(newcol(cacheHeros[index].appearance.weight[1]))
        hero.appendChild(newcol(cacheHeros[index].biography.placeOfBirth))
        hero.appendChild(newcol(cacheHeros[index].biography.alignment))
        tbody.appendChild(hero)
    }
  }

// mis en place des different event pour les boutton et la searchbar
// systeme pour les pages
  const insert = document.querySelector("#nb");
  insert.addEventListener("click", () => {
    const positionSelect = insert
    amin = 0;
    amax = (positionSelect.value !== "all results") ? parseInt(positionSelect.value) : positionSelect.value
    // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    // render(amax)
    loadData(cacheHeros,amax)
  });
  const left = document.querySelector("#left");
  left.addEventListener("click", ()=> {
    if (document.querySelector("#nb").value == "all results") return
    if(amax == nbhero){
      amax = amin
      amin -= parseInt(document.querySelector("#nb").value)
    }else if (amin != 0){
      amin -= parseInt(document.querySelector("#nb").value)
      amax -= parseInt(document.querySelector("#nb").value)
    }
    // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    loadData(cacheHeros,amax)
  });
  const right = document.querySelector("#right");
  right.addEventListener("click", ()=> {
    if (document.querySelector("#nb").value == "all results") return
    if (amax < nbhero){
      console.log("<")
      amin += parseInt(document.querySelector("#nb").value)
      amax += parseInt(document.querySelector("#nb").value)
    }else if (amax > nbhero){
      amin += parseInt(document.querySelector("#nb").value)
      amax = tab.length
    }
    // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    // render(amax)
    loadData(cacheHeros,amax)
  });
//searchbar
  const filter = document.querySelector("#filter");
  filter.addEventListener("keydown", ()=> {
    amin = 0;
    amax = parseInt(document.querySelector("#nb").value)
    // document.querySelector("#pos").textContent = `${amin} - ${amax}`
    render(amax)
  });
//function qui recupere les hero dans l'API et les envoie dans
// la fonction loaddata pour y être traiter
function render(amax){
  fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then((heroes) => loadData(heroes,amax))
}

// appel de function pour initier la page
checkDataList("")
render(20)
