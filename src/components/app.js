import React, { Component } from 'react';
import { connect } from 'react-redux';

import Api from 'api';
import { getAllCategoriesSuccess } from 'actions';

class App extends Component {
  componentDidMount() {
    Api.getCategories()
      .then(categories => this.props.loadCategories(categories));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        Udacity project #2 - Readable
        <ul>
          {this.props.categories.map((category) => (
            <li key={category.name}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => ({
  loadCategories: (categories) => dispatch(getAllCategoriesSuccess(categories)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
