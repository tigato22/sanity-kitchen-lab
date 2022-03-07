export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62256096d9b8df590bf074bd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-lab-studio',
                  apiId: 'a9443656-719b-4c5d-98af-f5f9abb3c05c'
                },
                {
                  buildHookId: '6225609607d20460e08ef492',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-lab',
                  apiId: '092c574b-cdcd-43c5-bcf1-9b7639f21016'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tigato22/sanity-kitchen-lab',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-lab.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
