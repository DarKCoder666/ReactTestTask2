import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {(this.props.auth.username ? this.props.auth.username : "Guest" )}!</h1>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    auth: { ...state.auth }
  }
}

export default connect(mapStateToProps, {})(Home);