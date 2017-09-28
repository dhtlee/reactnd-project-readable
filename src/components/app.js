import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Api from 'api';
import { getAllCategories, getAllPosts } from 'actions';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPostsAndComments();
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
  fetchCategories: () => dispatch(getAllCategories()),
  fetchPostsAndComments: () => dispatch(getAllPosts())
})

export default withRouter(connect(undefined, mapDispatchToProps)(App));
