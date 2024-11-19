module.exports = function (plop) {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase  name}}/{{pascalCase  name}}.tsx',
        templateFile: 'plop-templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase  name}}/{{pascalCase  name}}.stories.tsx',
        templateFile: 'plop-templates/stories.tsx.hbs'
      }
    ]
  })
}
