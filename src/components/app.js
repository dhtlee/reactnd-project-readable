import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Api from 'api';
import { getAllCategoriesSuccess, getAllPostsSuccess } from 'actions';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';

class App extends Component {
  componentDidMount() {
    Api.getCategories()
      .then(categories => this.props.loadCategories(categories));
    Api.getPosts()
      .then(posts => this.props.loadPosts(posts));
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

const mapDispatchToProps = (dispatch) => ({
  loadCategories: (categories) => dispatch(getAllCategoriesSuccess(categories)),
  loadPosts: (posts) => dispatch(getAllPostsSuccess(posts))
})

export default withRouter(connect(undefined, mapDispatchToProps)(App));
