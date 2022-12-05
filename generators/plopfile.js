const Component = {
  FULL: 'Complete component with typing and function?',
  SIMPLE: 'Simple component?'
}

module.exports = (plop) => {
  plop.setGenerator('Component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's your component name?"
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of component is it?',
        choices: [Component.FULL, Component.SIMPLE]
      }
    ],
    actions: function (data) {
      const actions = []

      if (data.type === Component.FULL) {
        actions.push(
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/ComponentFull.tsx.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/styles.ts',
            templateFile: 'templates/styles.ts.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/stories.tsx',
            templateFile: 'templates/storiesFull.tsx.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/test.tsx',
            templateFile: 'templates/test.tsx.hbs'
          }
        )
      }

      if (data.type === Component.SIMPLE) {
        actions.push(
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/Component.tsx.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/styles.ts',
            templateFile: 'templates/styles.ts.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/stories.tsx',
            templateFile: 'templates/stories.tsx.hbs'
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/test.tsx',
            templateFile: 'templates/test.tsx.hbs'
          }
        )
      }

      return actions
    }
  })

  plop.setGenerator('Template', {
    description: 'Create a template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's your template name?"
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
