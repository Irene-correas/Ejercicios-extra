"use strict";
const myWordList = [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

let writeThis = (word, num) => {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
};
writeThis("patata", 3);
writeThis("aguacate", 3);
writeThis("pizza", 3);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);

}
const numberRandom = getRandomNumber(10);
console.log(numberRandom);

writeThis("patata", numberRandom);

function writeMyArray(array) {
  for (let index = 0; index < array.length; index++) {

    const text = array[index].text;
    const total = array[index].total;

    writeMyArray(text, total);
  }
}
