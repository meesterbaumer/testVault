import { entryForm } from "./EntryForm.js"

const contentTarget = document.querySelector(".displayForm")

export const entryList = () => {
  contentTarget.innerHTML = entryForm()
}

const renderMetals = (metalArr) => {
  let metalsHTMLRep = ""
    for (const metal of metalArr) {
            
    }
}