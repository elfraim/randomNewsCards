import React, {Component} from 'react';

const imgStyle = {
    borderRadius: 2,
    alignSelf: 'flex-start',
    backgroundColor: '#adadad',
    backgroundSize: '100% 205px',
  }
  
export default class ArticlePic extends Component {
    render() {
      return (
        <a href={this.props.articleLink[this.props.articleNum]}>
          <img src={this.props.pic[this.props.articleNum]} alt="" style={imgStyle} id="img" />
        </a>
      )
    }
  }