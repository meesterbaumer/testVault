import { saveMetalEntry } from "../MetalList/MetalProvider.js"

const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("click", event => {
  if (event.target.id === "submitForm") {
    const entryName = document.querySelector("#metalForm--name")
    const entryType = document.querySelector("#metalForm--type")
    const entryWeight = document.querySelector("#metalForm--weight")
    const entryUnit = document.querySelector("#metalForm--unit")
    const entryQty = document.querySelector("#metalForm--qty")
    const entryCost = document.querySelector("#metalForm--cost")

    const newMetal = {
      name: entryName.value,
      type: entryType.value,
      weight: entryWeight.value,
      unit: entryUnit.value,
      qty: entryQty.value,
      purchasePrice: entryCost.value,
      timeStamp: Date.now()
    }
    saveMetalEntry(newMetal)
    entryName.value=""
    entryType.value="0"
    entryWeight.value=""
    entryUnit.value="0"
    entryQty.value=""
    entryCost.value=""

  }
})

export const entryForm = () => {
  return `
  <div class="metalFormContainer">
    <input type="text" class="metalForm--name" id="metalForm--name" placeholder="Enter a name for the item to enter">
    <select name="type" class="metalForm--type" id="metalForm--type">
      <option value="0">Select an entry type</option>
      <option value="Silver">Silver</option>
      <option value="Gold">Gold</option>
    </select>
    <input type="number" class="metalForm--weight" id="metalForm--weight" placeholder="Enter the weight of your item">
    <select name="type" class="metalForm--unit" id="metalForm--unit">
      <option value="0">Oz or Grams</option>
      <option value="Oz">Oz</option>
      <option value="Grams">Grams</option>
    </select>
    <input type="number" class="metalForm--qty" id="metalForm--qty" placeholder="How many do you have to enter">
    <input type="number" class="metalForm--cost" id="metalForm--cost" placeholder="How much did you pay for it?">
    <input type="submit" id="submitForm" value="Add to VauLT">
  `
}