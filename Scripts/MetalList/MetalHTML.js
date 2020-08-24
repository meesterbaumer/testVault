export const metalHTML = (metal) => {
  return `
  <div class="individualMetal">
    <div class="metalName">${metal.name}</div>
    <div class="metalType">${metal.type}</div>
    <div class="metalWeight">${metal.weight} ${metal.unit}</div>
    <div class="metalQty">Qty. on hand ${metal.qty}</div>
    <div class="metalPurchase">${metal.purchasePrice}</div>
  </div>
  `
}