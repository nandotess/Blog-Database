export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'displayName',
      title: 'Display Name',
      type: 'string'
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string'
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'displayName'
    }
  }
};
