import React from 'react';

import QuickLinks from './quick-links';
import Categories from './categories';

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <QuickLinks />
      <Categories />
    </div>
)};

export default Sidebar;