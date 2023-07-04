const {boyNames, girlNames} = require('./data')

const allNames = [...boyNames, ...girlNames]
const boyNamesLength = boyNames.length
const girlNamesLength = girlNames.length
const allNamesLength = allNames.length

function getBoyNames() {
  return [...boyNames]
}

function getGirlNames() {
  return [...girlNames]
}

function getAllNames() {
  return [...allNames]
}

function getRandomBoyName() {
  return getRandomNameFrom(boyNames)
}

function getRandomGirlName() {
  return getRandomNameFrom(girlNames)
}

function getRandomName() {
  return getRandomNameFrom(allNames)
}

function getRandomBoyNameThatStartsWith(start) {
  return getRandomNameFromThatStartsWith(getBoyNames(), start)
}

function getRandomGirlNameThatStartsWith(start) {
  return getRandomNameFromThatStartsWith(getGirlNames(), start)
}

function getRandomNameThatStartsWith(start) {
  return getRandomNameFromThatStartsWith(getAllNames(), start)
}

// Internal functions, not to be exported
function getNamesThatStartsWith(names, start) {
  start = start.toLowerCase()
  return names.filter(item => item.toLowerCase().startsWith(start))
}

function getRandomNameFrom(names) {
  return names[Math.floor(Math.random() * names.length)]
}

function getRandomNameFromThatStartsWith(names, start) {
  start = start.toLowerCase()
  const allMatches = getNamesThatStartsWith(names, start)
  if (allMatches.length === 0) return ''
  
  let name
  while(true) {
    name = getRandomNameFrom(allMatches)
    if (name.toLowerCase().startsWith(start)) {
      break
    }
  }
  return name
}

module.exports = {
  boyNamesLength,
  girlNamesLength,
  allNamesLength,
  getBoyNames,
  getGirlNames,
  getAllNames,
  getRandomBoyName,
  getRandomGirlName,
  getRandomName,
  getRandomBoyNameThatStartsWith,
  getRandomGirlNameThatStartsWith,
  getRandomNameThatStartsWith
}



