import { deleteMetalEntry } from "./MetalProvider.js"

const eventHub = document.querySelector(".eventHub")

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("metalEntryDelete--")) {
    const [a, id] = event.target.id.split("--")

    deleteMetalEntry(id)
  }
})

export const metalHTML = (metal) => {
  return `
  <div class="individualMetal">
    <div class="metalName">${metal.name}</div>
    <div class="metalType">${metal.type}</div>
    <div class="metalWeight">${metal.weight} ${metal.unit}</div>
    <div class="metalQty">Qty. on hand ${metal.qty}</div>
    <div class="metalPurchase">${metal.purchasePrice}</div>
    <button class="metalEntry--delete" id="metalEntryDelete--${metal.id}">Delete Entry</button>
  </div>
  `
}