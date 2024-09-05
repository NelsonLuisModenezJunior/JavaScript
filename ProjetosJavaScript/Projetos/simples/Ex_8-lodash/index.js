//usando o lodash para tranformar frases
import _ from 'lodash';

let frase = "Esta é uma frase"
let fraseKebabCase = _.kebabCase(frase)
console.log(fraseKebabCase) 