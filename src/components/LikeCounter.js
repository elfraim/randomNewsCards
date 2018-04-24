import React, {Component} from 'react';




export default class LikeCounter extends Component {
    render() {
      return (
        <p id="likeCounter">{this.props.counter} Likes</p>
      )
    }
  
  }