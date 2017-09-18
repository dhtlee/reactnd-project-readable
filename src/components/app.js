import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Api from 'api';
import { getAllCategoriesSuccess } from 'actions';
import Dashboard from './dashboard';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import Category from './category';

class App extends Component {
  componentDidMount() {
    Api.getCategories()
      .then(categories => this.props.loadCategories(categories));
  }

  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/category/react' component={Category}/>
        <Sidebar/>
        <Footer/>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
