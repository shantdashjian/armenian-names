# armenian-names

An NPM package for Armenian names.

![baby](./images/baby.jpg)

# Motivation

Armenain parents in the diaspora struggle to find good ethnic Armenian names for their new born babies. This package empowers web developers to build applications that help those parents with picking a good name.

# Usage

Install the package using [npm](https://www.npmjs.com/):
```bash
npm i armenian-names
```

Now you can require the package in your code and use it:
```javascript
const {getRandomBoyName, getRandomGirlName} = require('armenian-names')

console.log(getRandomBoyName())
console.log(getRandomGirlName())
```

The package exports the following functions:
```javascript
getBoyNames() 
getGirlNames() 
getAllNames() 
getRandomBoyName() 
getRandomGirlName() 
getRandomName() 
getRandomBoyNameThatStartsWith(firstLetters) 
getRandomGirlNameThatStartsWith(firstLetters) 
getRandomNameThatStartsWith(firstLetters)
```

# Source

[Wiktionary.org's page for Armenian given names](https://en.wiktionary.org/wiki/Appendix:Armenian_given_names)
