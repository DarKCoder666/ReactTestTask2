import React, { Component } from 'react'
import {
    InputGroup,
    Input,
} from 'reactstrap';
import { connect } from 'react-redux'
import { onFilterChange } from '../actions/postsAction'

class Search extends Component {
    render() {
        return (
            <div>
                <InputGroup>
                    <Input placeholder="Search line" data-filter-name="search" onChange={this.props.onFilterChange}/>
                </InputGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: { ...state.posts.posts }
    }
}

export default connect(mapStateToProps, { onFilterChange })(Search);