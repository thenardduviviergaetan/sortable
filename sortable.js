console.log("test")

//https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json
const newcol = (str) => {
    // let col = document.createElement("tr")
    let content = document.createElement("th")
    content.textContent = str
    // col.appendChild(content)
    // return col
    return content
}
const newimg = (str) => {
    // let col = document.createElement("tr")
    let content = document.createElement("th")
    let img = document.createElement("img")
    img.src = str
    content.appendChild(img)
    // col.appendChild(content)
    // return col
    return content
}
// This function is called only after the data has been fetched, and parsed.
const loadData = (heroes,max) => {
    max = (typeof max !== 'number'|| heroes.length < max) ? heroes.length : max
    // console.log(heroes[index].name)
    // console.log(heroes[index].images)
    // console.log(heroes[index].powerstats)
    // console.log(heroes[index].appearance.race)
    // console.log(heroes[index].appearance.gender)
    // console.log(heroes[index].appearance.height[1])
    // console.log(heroes[index].appearance.weight[1])
    // console.log(heroes[index].biography.placeOfBirth)
    // console.log(heroes[index].biography.alignment)
    let element = document.getElementById('table-heroes')
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let index=0
    let table = document.createElement("table")
    element.appendChild(table)
    let thead = document.createElement("thead")
    table.appendChild(thead)
    thead.appendChild(newcol("Screen"))
    thead.appendChild(newcol("Name"))
    thead.appendChild(newcol("Race"))
    thead.appendChild(newcol("Gender"))
    thead.appendChild(newcol("Height"))
    thead.appendChild(newcol("Weight"))
    thead.appendChild(newcol("PlaceOfBirth"))
    thead.appendChild(newcol("Alignement"))
    let tbody = document.createElement("tbody")
    table.appendChild(tbody)
    for (index;index<max;index++){
        let hero = document.createElement("tr")
        hero.id = index
        hero.appendChild(newimg(heroes[index].images.xs))
        hero.appendChild(newcol(heroes[index].name))
        hero.appendChild(newcol(heroes[index].appearance.race))
        hero.appendChild(newcol(heroes[index].appearance.gender))
        hero.appendChild(newcol(heroes[index].appearance.height[1]))
        hero.appendChild(newcol(heroes[index].appearance.weight[1]))
        hero.appendChild(newcol(heroes[index].biography.placeOfBirth))
        hero.appendChild(newcol(heroes[index].biography.alignment))
        tbody.appendChild(hero)
        // hero.appendChild()
        // document.getElementById('table-heroes').insertAdjacentHTML("beforeend",
        // element.insertAdjacentHTML("beforeend",
        //     '<div class="heros">'   
        //     +'<table>'
        //     +  '<thead>'
        //     +    '<tr>'
        //     +      '<th colspan="2">'+heroes[index].name+'</th>'
        //     +    '</tr>'
        //     +	'<tr>'
        //     +      '<th colspan="2"><img src="'+heroes[index].images.sm+'"></th>'
        //     // +      '<th colspan="2"><img src="'+heroes[index].images.xs+'"></th>'
        //     +    '</tr>'
        //     +  '</thead>'
        //     +  '<tbody>'
        //     +    '<tr>'
        //     +      '<td>Race :</td>'
        //     +      '<td>'+heroes[index].appearance.race+'</td>'
        //     +    '</tr>'
        //     +  	'<tr>'
        //     +      '<td>Gender :</td>'
        //     +      '<td>'+heroes[index].appearance.gender+'</td>'
        //     +    '</tr>'
        //     +  	'<tr>'
        //     +      '<td>Height :</td>'
        //     +      '<td>'+heroes[index].appearance.height[1]+'</td>'
        //     +    '</tr>'
        //     +  	'<tr>'
        //     +      '<td>Weight :</td>'
        //     +      '<td>'+heroes[index].appearance.weight[1]+'</td>'
        //     +    '</tr>'
        //     +  	'<tr>'
        //     +      '<td>Place of Birth :</td>'
        //     +      '<td>'+heroes[index].biography.placeOfBirth+'</td>'
        //     +    '</tr>'
        //     +  	'<tr>'
        //     +      '<td>Alignment :</td>'
        //     +      '<td>'+heroes[index].biography.alignment+'</td>'
        //     +    '</tr>'
        //     +  '</tbody>'
        //     +'</table>'
        //     +'</div>')
    }
  }

fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then((heroes) => loadData(heroes,20))
// fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then(loadData)

// const insert = document.querySelector("#insert");
const insert = document.querySelector("#nb");
insert.addEventListener("click", () => {
//   const subject = document.querySelector("#subject");
//   const positionSelect = document.querySelector("#nb");
  const positionSelect = insert
  //   subject.insertAdjacentHTML(
//     positionSelect.value,
//     "<strong>inserted text</strong>",
//   );
// console.log(parseInt(positionSelect.value))
// document.location.reload();
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then((heroes) => loadData(heroes,parseInt(positionSelect.value)))
    // loadData(fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()),parseInt(positionSelect.value))
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});