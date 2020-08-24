import { entryForm } from "./EntryForm.js"

const contentTarget = document.querySelector(".displayForm")

export const entryList = () => {
  contentTarget.innerHTML = entryForm()
}