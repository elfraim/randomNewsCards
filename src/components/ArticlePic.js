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
        <a href={this.props.articleLink[this.props.articleNum]}>
          <img src={this.props.pic[this.props.articleNum]} alt="Failed Loading Picture" style={imgStyle} />
        </a>
      )
    }
  }