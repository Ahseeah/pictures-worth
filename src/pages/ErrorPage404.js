import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage404 extends Component {
  render() {
    return (
      <div>
        <h1> Something went wrong ¯\_(ツ)_/¯ .</h1>
        <Link to="/">Please Try Again</Link>
      </div>
    )
  }
}

export default ErrorPage404
