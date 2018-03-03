import $ from 'jquery'
import Rx from 'rxjs'
// import anime from 'animejs'


/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================



(() => {
  // const $btn = $('.some-btn')
  // const $input = $('.my-input')
  const $par = $('.my-par')

  $par.css({border: '2px solid black', backgroundColor: '#999999'})

  const btn2 = $('.some-btn2')
  const observable = Rx.Observable.fromEvent(btn2, 'click')
    .debounceTime(500)
    // .map(event => event.clientX)
    .map(() => state => Object.assign({}, state, {count: state.count + 1}))

  const state = observable.scan((state, changeFn) => changeFn(state), {count: 0})
  // .scan((count, clientX) => count + clientX, 0)

  // observable.subscribe(val => $('.my-input').val(val))

})()
