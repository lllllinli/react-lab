import React from 'react';

/**
 * 兩種程式的寫法，1. 指令 2. 宣告式
 */


const source = [1, 5, 9, 3, 'hi', 'tb', 456, '11', 'yoyoyo'];

/**
 * 指令式編程 Imperative programming wiki : https://zh.wikipedia.org/wiki/%E6%8C%87%E4%BB%A4%E5%BC%8F%E7%B7%A8%E7%A8%8B
 */

let total = 0;

for(let i = 0; i < source.length; i++) {
  let num = parseInt(source[i], 10);
  if(!isNaN(num)) {
    total += num;
  }
}

console.group('Imperative');
console.log(`tatol:${total}`);
console.groupEnd('Imperative');

/**
 * 宣告式編程 Declarative Programming wiki ： https://zh.wikipedia.org/wiki/%E5%AE%A3%E5%91%8A%E5%BC%8F%E7%B7%A8%E7%A8%8B
 */

let result = source
  .map(item => parseInt(item, 10))
  .filter(item => !isNaN(item))
  .map(item => item * 2)
  .reduce((total, value) => total + value);

console.group('Declarative');
console.log(`result:${result}`);
console.groupEnd('Declarative');

const Example_01 = ({ match }) => {
  console.group('ex match');
  console.log(match);
  console.groupEnd('ex match');
  return (
    <div>
      <h2>Example01</h2>
    </div>
  );
};


export default Example_01;

