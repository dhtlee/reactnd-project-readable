import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import WhiteSpace from './white-space';

const ContentControl = ({ location: { pathname } }) => {
  return (
    <div className='content-sort'>
      Sort by:
      <WhiteSpace />
      <Link to={{
        pathname,
        search: `?sort=voteScore`
        }}>Vote Score
      </Link>
      ,
      <WhiteSpace />
      <Link to={{
        pathname,
        search: `?sort=timestamp`
        }}>Posted time
      </Link>
    </div>
  )
}

export default withRouter(ContentControl);