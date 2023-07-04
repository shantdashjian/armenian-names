const {
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
} = require('../index')

test('gets all boy names', () => {
  const boyNames = getBoyNames()
  expect(boyNames.length).toBe(boyNamesLength)
  expect(boyNames.includes('Shant')).toBe(true)
})

test('gets all girl names', () => {
  const girlNames = getGirlNames()
  expect(girlNames.length).toBe(girlNamesLength)
  expect(girlNames.includes('Ani')).toBe(true)
})

test('gets all names', () => {
  const allNames = getAllNames()
  expect(allNames.length).toBe(allNamesLength)
  expect(allNames.includes('Shant')).toBe(true)
  expect(allNames.includes('Ani')).toBe(true)
})

test('gets random boy name', () => {
  const boyName = getRandomBoyName()
  expect(boyName).toBeTruthy()
})

test('gets random girl name', () => {
  const girlName = getRandomGirlName()
  expect(girlName).toBeTruthy()
})

test('gets random name', () => {
  const name = getRandomName()
  expect(name).toBeTruthy()
})

test('gets random boy name that starts with A', () => {
  const name = getRandomBoyNameThatStartsWith('A')
  expect(name.startsWith('A')).toBe(true)
})

test('gets random girl name that starts with A', () => {
  const name = getRandomGirlNameThatStartsWith('A')
  expect(name.startsWith('A')).toBe(true)
})

test('gets random name that starts with A', () => {
  const name = getRandomNameThatStartsWith('A')
  expect(name.startsWith('A')).toBe(true)
})

test('gets an empty name when trying to get random name that starts with AAA', () => {
  const name = getRandomNameThatStartsWith('AAA')
  expect(name).toBe('')
})
