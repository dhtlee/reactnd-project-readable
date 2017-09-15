import React, { Component } from 'react';
import { connect } from 'react-redux';

import Api from 'api';
import { getAllCategoriesSuccess } from 'actions';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';

class App extends Component {
  componentDidMount() {
    Api.getCategories()
      .then(categories => this.props.loadCategories(categories));
  }

  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Content/>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
