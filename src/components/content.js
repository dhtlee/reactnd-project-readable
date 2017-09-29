import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PostList from './post-list';
import PostDetail from './post-detail';
import { upvotePost, downvotePost } from 'actions';

class Content extends Component {
  filterPostByCategory(posts, category) {
    return posts.filter(post => post.category === category); 
  }

  filterPostById(posts, id) {
    return posts.filter(post => post.id === id);
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
          path='/posts/:id' 
          render={({ match }) => {
            const post = this.filterPostById(posts, match.params.id)[0];
            return (
              <PostDetail {...post} 
                onUpvotePost={() => this.props.onUpvotePost(post.id)}
                onDownvotePost={() => this.props.onDownvotePost(post.id)}
              />
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

const mapStateToProps = ({ posts, comments, sortBy }) => ({
  posts: posts.map((post) => ({
    ...post,
    comments: comments.filter(comment => comment.parentId === post.id)
  })),
  sortBy
})

const mapDispatchToProps = (dispatch) => ({
  onUpvotePost: (id) => dispatch(upvotePost(id)),
  onDownvotePost: (id) => dispatch(downvotePost(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));