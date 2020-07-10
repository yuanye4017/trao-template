const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate vue component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'component name please',
    validate: notEmpty('name')
  }],
  actions: () => {
    const name = '{{properCase name}}'
    const actions = [{
      type: 'add',
      path: `src/components/${name}/index.jsx`,
      templateFile: 'plop-templates/component/index.hbs'
    }]

    return actions
  }
}
