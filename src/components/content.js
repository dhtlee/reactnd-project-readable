import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PostList from './post-list';
import PostDetail from './post-detail';

class Content extends Component {
  filterPostByCategory(posts, category) {
    return posts.filter(post => post.category === category); 
  }

  filterPostByTitle(posts, title) {
    return posts.filter(post => post.title === title);
  }

  render() {
    const { posts, sortBy } = this.props;
    posts.sort((post1, post2) => post2[sortBy] - post1[sortBy]);
    return (
      <div className='content'>
        <Route exact 
          path='/' 
          render={() => (
            <PostList posts={posts} />
          )}
        />
        <Route 
          path='/posts/:title' 
          render={({ match }) => {
            const title = decodeURI(match.params.title);
            const post = this.filterPostByTitle(posts, title)[0];
            return (
              <PostDetail {...post} />
            )
          }}
        />
        <Route 
          path='/categories/:name'
          render={({ match }) => (
            <PostList posts={this.filterPostByCategory(posts, match.params.name)} />
          )}
        />
      </div>
    )  
  }
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  sortBy: state.sortBy
})

export default withRouter(connect(mapStateToProps)(Content));