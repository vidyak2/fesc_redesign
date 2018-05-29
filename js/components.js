// Logo 

Vue.component('app-header', {
  props: ['text'],
  template: '<header><h1>{{text}}</h1></header>'
})

Vue.component('app-second-header', {
  props: ['text'],
  template: '<h2>{{text}}</h2>'
})

Vue.component('app-third-header', {
  props: ['text'],
  template: '<h3>{{text}}</h3>'
})
