import { entryForm } from "./EntryForm.js"
import { metalHTML } from "../MetalList/MetalHTML.js"
import { getMetals, useMetals } from "../MetalList/MetalProvider.js"

const formTarget = document.querySelector(".displayForm")
const displayTarget = document.querySelector(".displayCoins")
const eventHub = document.querySelector(".eventHub")

let metals = []

eventHub.addEventListener("updatedDatabase", () => {
  const newEntries = useMetals()
  renderMetals(newEntries)
})


export const entryList = () => {
  formTarget.innerHTML = entryForm()
  getMetals()
  .then(() => {
    metals = useMetals()
    renderMetals(metals)
  })
}

const renderMetals = (metalArr) => {
  let metalsHTMLRep = ""
    for (const metal of metalArr) {
      metalsHTMLRep += metalHTML(metal)
    }
  displayTarget.innerHTML = `
    <div class="metalDisplayContainer">${metalsHTMLRep}</div>
  `
}