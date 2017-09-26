import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PostList from './post-list';
import Post from './post';

class Content extends Component {
  filterPostByCategory(category) {
    return this.props.posts.filter(post => post.category === category); 
  }

  filterPostByTitle(title) {
    return this.props.posts.filter(post => post.title === title);
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='content'>
        <Route exact 
          path='/' 
          render={() => (
            <PostList posts={posts} />
          )}
        />
        <Route 
          path='/post/:title' 
          render={({ match }) => {
            const title = decodeURI(match.params.title);
            const post = this.filterPostByTitle(title)[0];
            return (
              <Post {...post} />
            )
          }}
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