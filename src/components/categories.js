import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { capitalizeFirst } from 'utils/helper';

const Categories = ({ location, categories }) => (
  <div className='sidebar-section'>
    <div className='sidebar-section-header heading'>
      <h4>Categories</h4>
    </div>
    <div className='sidebar-section-content'>
    {categories.map((category, index) => (
      <div className='sidebar-section-content-item' key={index}>
        {location.pathname === `/categories/${category.name}` ?
        <span>{capitalizeFirst(category.name)}</span>
        :
        <Link to={`/categories/${category.name}`}>{capitalizeFirst(category.name)}</Link>
        }
      </div>
    ))}
    </div>
  </div>
)

const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps)(Categories));