import React, {Component} from 'react';

const imgStyle = {
    width: '500px',
    height: '210px', 
    borderRadius: 2,
    alignSelf: 'flex-start',
    backgroundColor: '#adadad',
  }
  
export default class ArticlePic extends Component {
    render() {
      return (
        <a href={this.props.articleLink[10]}>
          <img src={this.props.pic[10]} alt="this is a pic" style={imgStyle} />
        </a>
      )
    }
  }