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
    return posts.filter(post => post.id === id);
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
          <Route
            path='/posts/new'
            component={PostForm}
          />
          <Route 
            path='/posts/:id' 
            render={({ match }) => {
              const post = this.filterPostById(posts, match.params.id)[0];
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
        </Switch>
      </div>
    ) 
  }
};

const mapStateToProps = ({ posts, comments }) => ({
  posts: posts.map((post) => ({
    ...post,
    comments: comments.filter(comment => comment.parentId === post.id)
  }))
});

export default withRouter(connect(mapStateToProps)(Content));