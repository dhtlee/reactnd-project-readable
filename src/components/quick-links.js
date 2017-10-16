import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const withToggle = (WrappedComponent) => ({ location }) => 
  location.pathname === '/' ?
  <WrappedComponent>
    <span>Home</span>
  </WrappedComponent>
  :
  <WrappedComponent>
    <Link to='/'>Home</Link>
  </WrappedComponent>

const QuickLinks = ({ children }) => {
  return (
    <div className='sidebar-section'>
      <div className='sidebar-section-header heading'>
        <h4>Quick Links</h4>
      </div>
      <div className='sidebar-section-content'>
        <div className='sidebar-section-content-item'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default withRouter(withToggle(QuickLinks));