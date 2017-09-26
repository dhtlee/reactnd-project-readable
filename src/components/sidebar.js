import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { capitalizeFirst } from 'utils/helper';

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
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
      <div className='sidebar-section'>
        <div className='sidebar-section-header'>
          <h4>Categories</h4>
        </div>
        <div className='sidebar-section-content'>
        {props.categories.map((category, index) => (
          <div className='sidebar-section-content-item' key={index}>
            {props.location.pathname === `/category/${category.name}` ?
            <span>{capitalizeFirst(category.name)}</span>
            :
            <Link to={`/category/${category.name}`}>{capitalizeFirst(category.name)}</Link>
            }
          </div>
        ))}
        </div>
      </div>
    </div>
)};

const mapStateToProps = (state) => ({
  categories: state.categories
})

export default withRouter(connect(mapStateToProps)(Sidebar));