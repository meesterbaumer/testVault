let metals = []

export const useMetals = () => metals.slice()

export const getMetals = () => {
  return fetch("http://localhost:8088/metalEntries")
  .then(res => res.json())
  .then(data => metals = data)
}

export const saveMetalEntry = (ent) => {
  fetch("http://localhost:8088/metalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ent)
  })
  // .then(getMetals)
  // .then(useMetals)
  // return metals
}