
require('./lib')

if (module.hot) {
  module.hot.accept('./lib', function() {
    console.log('accepted lib')
  })
}
