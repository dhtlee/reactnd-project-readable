import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/'>Home</Link>
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
            <Link to={`/category/${category.name}`}>{capitalizeFirst(category.name)}</Link>
          </div>
        ))}
        </div>
      </div>
    </div>
)};

const mapStateToProps = (state) => ({
  categories: state.categories
})

export default connect(mapStateToProps)(Sidebar);