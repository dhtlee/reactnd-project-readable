import React from 'react';
import { connect } from 'react-redux';

const Sidebar = (props) => {
  console.log(props.categories);
  return (
    <div className='sidebar'>
      <div className='sidebar--section'>
        <div className='sidebar--section--label'>
          <h4>Categories</h4>
        </div>
        <div className='sidebar--section--content'>
          <ul>
            {props.categories.map((category) => (
              <li key={category.name}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
)};

const mapStateToProps = (state) => ({
  categories: state.categories
})

export default connect(mapStateToProps)(Sidebar);