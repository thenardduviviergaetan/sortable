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
// const newbtn = (btn) => {
//   let content = document.createElement("th")
//   content.appendChild(btn)
//   return content
// }