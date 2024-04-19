export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of your blog post',
      },
      {name: 'slug', type: 'slug', title: 'Slug of your blog post', options: {source: 'title'}},
      {name: 'titleImage', type: 'image', title: 'Title of the image'},
      {name: 'smallDescription', type: 'text', title: 'Small description'},
      {name: 'content', type: 'array', title: 'Content', of: [{type: 'block'}]},
    ],
  }
  