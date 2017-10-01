import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PostList from './post-list';
import PostDetail from './post-detail';
import {
  upvotePost,
  downvotePost,
  upvoteComment,
  downvoteComment,
  setSortBy
} from 'actions';

class Content extends Component {
  filterPostByCategory(posts, category) {
    return posts.filter(post => post.category === category); 
  }

  filterPostById(posts, id) {
    return posts.filter(post => post.id === id);
  }

  render() {
    const { posts, sortBy, onUpvotePost, onDownvotePost,
      onUpvoteComment, onDownvoteComment, onSelectSortBy } = this.props;
    return (
      <div className='content'>
        <Route exact 
          path='/' 
          render={() => (
            <PostList 
              posts={posts}
              onUpvotePost={onUpvotePost}
              onDownvotePost={onDownvotePost}
              currentSortBy={sortBy.posts}
              onSelectSortBy={onSelectSortBy}
            />
          )}
        />
        <Route 
          path='/posts/:id' 
          render={({ match }) => {
            const post = this.filterPostById(posts, match.params.id)[0];
            return (
              <PostDetail {...post} 
                onUpvotePost={onUpvotePost}
                onDownvotePost={onDownvotePost}
                onUpvoteComment={onUpvoteComment}
                onDownvoteComment={onDownvoteComment}
              />
            )
          }}
        />
        <Route 
          path='/categories/:name'
          render={({ match }) => (
            <PostList 
              posts={this.filterPostByCategory(posts, match.params.name)}
              onUpvotePost={onUpvotePost}
              onDownvotePost={onDownvotePost}
              currentSortBy={sortBy.posts}
              onSelectSortBy={onSelectSortBy}
            />
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
  onDownvotePost: (id) => dispatch(downvotePost(id)),
  onUpvoteComment: (id) => dispatch(upvoteComment(id)),
  onDownvoteComment: (id) => dispatch(downvoteComment(id)),
  onSelectSortBy: (content) => (type, order) => dispatch(setSortBy(content, type, order))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));