# armenian-names

An NPM package for Armenian names.

![baby](./images/baby.jpg)

# Motivation

Armenain parents in the diaspora struggle to find good ethnic Armenian names for their new born babies. This package empowers web developers to build applications that help those parents with picking a good name.

# Usage

Install the package using [npm](https://www.npmjs.com/):
<pre>
$ npm i armenian-names
</pre>

Now you can require the package in your code and use it:
<pre>
const {getRandomBoyName, getRandomGirlName} = require('armenian-names')

console.log(getRandomBoyName())
console.log(getRandomGirlName())

</pre>

The package exports the following functions:
<pre>
getBoyNames() 
getGirlNames() 
getAllNames() 
getRandomBoyName() 
getRandomGirlName() 
getRandomName() 
getRandomBoyNameThatStartsWith(firstLetters) 
getRandomGirlNameThatStartsWith(firstLetters) 
getRandomNameThatStartsWith(firstLetters)
</pre>

# Source

[Wiktionary.org's page for Armenian given names](https://en.wiktionary.org/wiki/Appendix:Armenian_given_names)
