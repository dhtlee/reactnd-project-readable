import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from './post-list';

class Dashboard extends Component {
  render() {
    return (
      <PostList posts={this.props.posts}/>
    )
  }
}


const mapStateToProps = ({ posts }) => ({
  posts
});
  

export default connect(mapStateToProps)(Dashboard);