import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PostForm from './post-form';
import PostList from './post-list';
import PostDetail from './post-detail';

class Content extends Component {
  filterPostByCategory(posts, category) {
    return posts.filter(post => post.category === category); 
  }

  filterPostById(posts, id) {
    return posts.filter(post => post.id === id)[0];
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='content'>
        <Switch>
          <Route exact 
            path='/' 
            render={() => (
              <PostList posts={posts} />
            )}
          />
          <Route exact
            path='/posts/new'
            component={PostForm}
          />
          <Route
            path='/posts/:id/edit'
            render={({ match }) => (
              <PostForm initialValues={this.filterPostById(posts, match.params.id)} />
            )}
          />
          <Route exact
            path='/posts/:id' 
            render={({ match }) => (
              <PostDetail {...this.filterPostById(posts, match.params.id)} />
            )}
          />
          <Route exact
            path='/categories/:name'
            render={({ match }) => (
              <PostList posts={this.filterPostByCategory(posts, match.params.name)} />
            )}
          />
        </Switch>
      </div>
    ) 
  }
};

const mapStateToProps = ({ posts, comments }) => ({
  posts: posts.filter(post => !post.deleted).map((post) => ({
    ...post,
    comments: comments.filter(comment => !comment.deleted)
      .filter(comment => comment.parentId === post.id)
  }))
});

export default withRouter(connect(mapStateToProps)(Content));