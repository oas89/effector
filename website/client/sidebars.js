const sidebar = {
  Introduction: [
    'introduction/installation',
    'introduction/core-concepts',
    'glossary',
    'introduction/examples',
    'ecosystem',
  ],
  API: [
    {
      type: 'category',
      label: 'effector',
      items: [
        'api/effector/effector',
        {
          type: 'category',
          label: 'Unit creators',
          items: [
            'api/effector/createStore',
            'api/effector/createEvent',
            'api/effector/createEffect',
            'api/effector/createDomain',
          ],
        },
        {
          type: 'category',
          label: 'Unit types',
          items: [
            'api/effector/event',
            'api/effector/store',
            'api/effector/effect',
            'api/effector/domain',
          ],
        },
        'api/effector/combine',
        'api/effector/restore',
        'api/effector/createApi',
        'api/effector/sample',
        'api/effector/guard',
        'api/effector/attach',
        'api/effector/merge',
        'api/effector/split',
        'api/effector/forward',
        'api/effector/is',
        'api/effector/fromObservable',
        {
          type: 'category',
          label: 'Fork api',
          items: [
            'api/effector/scope',
            'api/effector/fork',
            'api/effector/serialize',
            'api/effector/hydrate',
            'api/effector/allSettled',
            'api/effector/scopeBind',
          ],
        },
        'api/effector/babel-plugin',
        {
          type: 'category',
          label: 'Low level api',
          items: [
            'api/effector/clearNode',
            'api/effector/withRegion',
            'api/effector/launch',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'effector-react',
      items: [
        'api/effector-react/effector-react',
        {
          type: 'category',
          label: 'Hooks',
          items: [
            'api/effector-react/useStore',
            'api/effector-react/useStoreMap',
            'api/effector-react/useList',
          ],
        },
        {
          type: 'category',
          label: 'Gate API',
          items: [
            'api/effector-react/gate',
            'api/effector-react/createGate',
            'api/effector-react/useGate',
          ],
        },
        {
          type: 'category',
          label: 'Top-level exports',
          items: [
            'api/effector-react/createComponent',
            'api/effector-react/createStoreConsumer',
            'api/effector-react/connect',
          ],
        },
        {
          type: 'category',
          label: 'effector-react/ssr api',
          items: ['api/effector-react/useEvent'],
        },
      ],
    },
    {
      type: 'category',
      label: 'effector-vue',
      items: [
        'api/effector-vue/effector-vue',
        'api/effector-vue/vue-effector',
        'api/effector-vue/component-options',
        'api/effector-vue/vue',
      ],
    },
  ],
  Conventions: ['conventions/naming', 'conventions/best-practices'],
  Recipes: [
    'recipes/recipes',
    'recipes/countdown',
    //'recipes/design-api-layer',
    'recipes/usage-with-typescript',
    'recipes/react-native/example',
    {
      type: 'category',
      label: 'React',
      items: [
        'recipes/react/counter',
        'recipes/react/example-effects',
        'recipes/react/example-forms',
        'recipes/react/gate',
        'recipes/react/todo-creator',
        'recipes/react/dynamic-form-schema',
        'recipes/react/todo-with-validation',
      ],
    },
    {
      type: 'category',
      label: 'React Native',
      items: ['recipes/react-native/example'],
    },
  ],
  'Advanced guide': [
    'advanced-guide/computation-priority',
    'advanced-guide/prior-art',
  ],
}

module.exports = {
  docs: sidebar,
  api: sidebar,
}
