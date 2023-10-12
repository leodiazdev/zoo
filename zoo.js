const Lion = require('./animals/lion');
const Tiger = require('./animals/tiger');

const lion = new Lion();
const tiger = new Tiger();

const lionMessage = "I'm a lion";
const tigerMessage = "Lions suck";

console.log(lion.speak(lionMessage));
console.log(tiger.speak(tigerMessage));