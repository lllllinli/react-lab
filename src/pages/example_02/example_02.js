import React from 'react';
import Rx from 'rxjs/Rx';

/*
 * 名詞解釋：
 * Observable ，可以被監聽的對象。
 * Observer ， 觀察者
 */


/**
 * 只是一般註冊偵聽事件
 */
// Rx
//   .Observable
//   .fromEvent(window, 'click')
//   .subscribe( e => console.log(e));

/**
 * 加入 Declarative
 */
// Rx
//   .Observable
//   .fromEvent(window, 'click')
//   .map(e => e.target)
//   .subscribe( e => console.log(e));

Rx.Observable.fromEvent(window, 'click')
  .map(e => 1)
  .scan((total, now) => total + now)
  .subscribe(value => {
    console.log(`value:${value}`);

  });

const Example_02 = () => (
  <div>
    <h2>Example02</h2>
  </div>
);


export default Example_02;
