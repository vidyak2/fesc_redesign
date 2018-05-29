// Logo 

Vue.component('app-header', {
  props: ['text'],
  template: '<header><h1><img src="images/logo.png" alt="logo">{{text}}</h1></header>'
})

Vue.component('app-second-header', {
  props: ['text'],
  template: '<header><h2>{{text}}</h2></header>'
})

Vue.component('app-third-header', {
  props: ['text'],
  template: '<header><h3>{{text}}</h3></header>'
})
