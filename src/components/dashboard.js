import React from 'react';

import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';

const Dashboard = () => (
  <div className='wrapper'>
    <Header/>
    <Content/>
    <Sidebar/>
    <Footer/>
  </div>
);

export default Dashboard;