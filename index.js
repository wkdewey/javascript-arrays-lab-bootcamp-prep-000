const app = "I don't do much."


function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var newkittens = kittens;
  newkittens.push(name);
  console.log(newkittens);
  console.log(kittens)
  return newkittens;
}
var kittens = ['Milo', 'Otis', 'Garfield']
appendKitten('Broom')