import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Api from 'api';
import { getAllCategoriesSuccess } from 'actions';
import Dashboard from './dashboard';
import Header from './header';

class App extends Component {
  componentDidMount() {
    Api.getCategories()
      .then(categories => this.props.loadCategories(categories));
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={Dashboard}/>
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
