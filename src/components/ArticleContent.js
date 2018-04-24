import React, {Component} from 'react';



export default class ArticleContent extends Component {
    render() {
      return (
        <p id="para" style={{fontSize: 15}}>{this.props.articleDisc[10]}</p>
      )
    }
  }
  