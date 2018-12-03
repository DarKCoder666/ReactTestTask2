import React, { Component } from 'react'
import { Container } from 'reactstrap'

import { connect } from 'react-redux'

import PostPreview from './PostPreview'
import Search from './Search'

class News extends Component {
    render() {
        let posts = this.props.posts.filtredPosts.map((el, i) => (
            <PostPreview editTask={this.props.editTask} auth={this.props.auth} key={i} el={el} />
        ));

        if(posts.length === 0) {
            posts.push(
                <h1 key="1">There is no post yet!</h1>
            )
        }

        return (
            <div>
                <Container>
                    <Search />
                    {posts}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: { ...state.posts.posts },
        auth: { ...state.auth }
    }
}

export default connect(mapStateToProps, {  })(News);