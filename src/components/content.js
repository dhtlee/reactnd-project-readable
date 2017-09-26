import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentControl from './content-control';
import PostList from './post-list';

class Content extends Component {
  filterPostByCategory(category) {
    return this.props.posts.filter(post => post.category === category); 
  }

  render() {
    return (
      <div className='content'>
        <ContentControl />
        <Route exact 
          path='/' 
          render={() => (
            <PostList posts={this.props.posts} />
          )}
        />
        <Route 
          path='/category/:name'
          render={({ match }) => (
            <PostList posts={this.filterPostByCategory(match.params.name)} />
          )}
        />
      </div>
    )  
  }
};

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default withRouter(connect(mapStateToProps)(Content));