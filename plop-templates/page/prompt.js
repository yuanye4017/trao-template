const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a view',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'please enter page name',
    validate: notEmpty('name')
  }],
  actions: () => {
    const name = '{{name}}'
    const actions = [{
      type: 'add',
      path: `src/pages/${name}/index.jsx`,
      templateFile: 'plop-templates/page/index.hbs'
    }, {
      type: 'add',
      path: `src/pages/${name}/index.scss`
    }, {
      type: 'add',
      path: `src/pages/${name}/index.config.js`,
      templateFile: 'plop-templates/page/config.hbs'
    }]

    return actions
  }
}
