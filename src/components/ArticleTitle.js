import React, { Component } from 'react';



export default class ArticleTitle extends Component {
    render() {
      return (
        <h2 id="articleTitle">{this.props.title[10]}</h2>
      )
    }
  }
  