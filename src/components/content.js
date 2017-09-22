import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './dashboard';
import Category from './category';

const Content = () => (
  <div className='content'>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/category/:name' component={Category}/>
  </div>
);

export default Content;