import React from 'react';

import { CONTENT_COMMENTS } from 'actions/constants';
import ContentControl from './content-control';

const ContentControlComment = (props) => (
  <ContentControl type={CONTENT_COMMENTS} {...props} />
)

export default ContentControlComment;