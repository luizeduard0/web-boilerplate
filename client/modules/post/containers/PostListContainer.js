import React, { Component } from 'react'
import Spinner from 'reax-commons/client/components/Spinner'
import Alert from 'reax-commons/client/components/Alert'
import { connect } from 'react-redux'
import PostList from '../components/PostList'
import { getPosts } from '../'

class PostListContainer extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
  }
  render() {
    const { posts } = this.props
    if (!posts) {
      return <Spinner />
    }
    if (posts instanceof Error) {
      return <Alert type="danger">Failed to load posts</Alert>
    }
    if (posts.length === 0) {
      return <Alert type="warning">No posts found</Alert>
    }
    return <PostList posts={posts} />
  }
}

function mapStateToProps({ post }) {
  return {
    posts: post.posts
  }
}

export default connect(mapStateToProps, { getPosts })(PostListContainer)
