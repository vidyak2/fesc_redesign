// Making the header dynamically change, as a component

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


//Vue.component('app-header', {
//  props: ['text'],
//  template: '<header><h1><img src="images/logo.png" alt="logo">{{text}}</h1></header>'
//})
