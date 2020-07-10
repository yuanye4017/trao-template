const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate store',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'store name please',
    validate: notEmpty('name')
  }],
  actions() {
    const name = '{{name}}'

    const actions = [{
      type: 'add',
      path: `src/store/state/${name}.js`,
      templateFile: 'plop-templates/store/state.hbs'
    }, {
      type: 'add',
      path: `src/store/reducers/${name}.js`,
      templateFile: 'plop-templates/store/reducers.hbs'
    },
    {
      type: 'add',
      path: `src/store/constants/${name}.js`,
      templateFile: 'plop-templates/store/constants.hbs'
    }, {
      type: 'add',
      path: `src/store/actions/${name}.js`,
      templateFile: 'plop-templates/store/actions.hbs'
    }]
    return actions
  }
}
