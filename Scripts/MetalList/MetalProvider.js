let metals = []

const eventHub = document.querySelector(".eventHub")

const dispatchStateChangeEvent = () => {
  const change = new CustomEvent("updatedDatabase")

  eventHub.dispatchEvent(change)
}

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
  .then(getMetals)
  .then(useMetals)
  .then(dispatchStateChangeEvent)
}

export const deleteMetalEntry = (entId) => {
  return fetch(`http://localhost:8088/metalEntries/${entId}`, {
    method: "DELETE"
  })
  .then(getMetals)
  .then(dispatchStateChangeEvent)
}