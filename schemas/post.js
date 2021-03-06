export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
      // it's not possible (yet) to create/update
      // a hard reference using any API
      // type: 'reference',
      // to: { type: 'author' }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text'
    }
  ],

  preview: {
    select: {
      title: 'title',
      // author: 'author.displayName',
      media: 'mainImage'
    }

    // prepare(selection) {
    //   const { author } = selection;

    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`
    //   });
    // }
  }
};
