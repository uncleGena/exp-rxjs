import $ from 'jquery'
import Rx from 'rxjs'


/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================



(() => {
  const $btn = $('.my-btn')
  const $input = $('.my-input')
  const $par = $('.my-par')

  $par.css({border: '2px solid black', backgroundColor: '#999999'})

  const btnS = Rx.Observable.fromEvent($btn, 'click')
  .subscribe((ev) => $par.animate({
    color: '#009922',
    opacity: .3,
    fontWeight: 800,
    height: '300px',
    backgroundColor: '#993456'
  }, 2000, () => {
    console.log('completed')
  }))

})()
