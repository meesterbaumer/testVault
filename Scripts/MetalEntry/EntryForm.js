export const entryForm = () => {
  return `
  <div class="metalContainer">
    <input type="text" class="metalForm--name" id="metalForm--name" placeholder="Enter a name for the item to enter">
    <select name="type" class="metalForm--type" id="metalForm--type">
      <option value="0">Select an entry type</option>
      <option value="bullion">Bullion</option>
      <option value="coin">Coin</option>
    </select>
    <input type="text" class="metalForm--weight" id="metalForm--weight" placeholder="Enter the weight of your item">
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