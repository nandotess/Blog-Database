import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import post from './post';
import user from './user';

export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([post, user])
});
