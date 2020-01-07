export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e14178bdf6932777886e17b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ub1zcvc2',
                  apiId: '2b406380-33ad-4110-b580-90273cf6bb02'
                },
                {
                  buildHookId: '5e14178bc51d5aa21f2bae06',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yqt812yo',
                  apiId: '59f5ef9c-e8d0-4ea3-b9ee-a1582e88ba4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Baconriver/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yqt812yo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
