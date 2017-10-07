import React from 'react';

import { CONTENT_POSTS } from 'actions/constants';
import ContentControl from './content-control';

const ContentControlPost = (props) => (
  <ContentControl type={CONTENT_POSTS} {...props} />
)

export default ContentControlPost;