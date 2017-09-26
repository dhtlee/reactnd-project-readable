import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { capitalizeFirst } from 'utils/helper';

const Categories = (props) => (
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
)

const mapStateToProps = (state) => ({
  categories: state.categories
})

export default withRouter(connect(mapStateToProps)(Categories));