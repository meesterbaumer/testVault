let metals = []

export const useMetals = () => metals.slice()

export const getMetals = () => {
  return fetch("http://localhost:8088/metalEntries")
  .then(res => res.json())
  .then(data => metals = data)
}