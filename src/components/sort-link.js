import React from 'react';
import { Link } from 'react-router-dom';

import WhiteSpace from './white-space';

const SortLink = ({ sortBy, currentSortBy, onClick, children }) => (
  <div>
    <WhiteSpace />
    {currentSortBy === sortBy ? 
      <span>{children}</span>
      :
      <Link to={'#'} onClick={event => {
        event.preventDefault();
        onClick(sortBy)}}>
      {children}
    </Link>
    }
  </div>
)

export default SortLink;