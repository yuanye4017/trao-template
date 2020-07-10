const viewGenerator = require('./plop-templates/page/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt')

module.exports = function(plop) {
  plop.setGenerator('page', viewGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}
