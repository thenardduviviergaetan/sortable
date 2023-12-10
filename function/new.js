
//simple fonction qui permette de crer un element et di stocker l'information / image voulut
export const newcol = (str) => {
    let content = document.createElement("th")
    content.textContent = str
    return content
}
export const newline = (str) => {
    let content = document.createElement("tr")
    content.textContent = str
    return content
}
export const newimg = (str) => {
    let content = document.createElement("th")
    let img = document.createElement("img")
    img.src = str
    content.appendChild(img)
    return content
}
//cree la balise option stocker dans la datalist
export function newdata(str){
    let data = document.createElement("option")
    data.value = str
    return data
  }
// const newbtn = (btn) => {
//   let content = document.createElement("th")
//   content.appendChild(btn)
//   return content
// }