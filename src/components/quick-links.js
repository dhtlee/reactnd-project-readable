import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const QuickLinks = (props) => (
  <div className='sidebar-section'>
    <div className='sidebar-section-header'>
      <h4>Quick Links</h4>
    </div>
    <div className='sidebar-section-content'>
      <div className='sidebar-section-content-item'>
      {props.location.pathname === '/' ?
        <span>Home</span>
        :
        <Link to='/'>Home</Link>
      }
      </div>
    </div>
  </div>
)

export default withRouter(QuickLinks);