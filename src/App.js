import React, { Component } from 'react';
import './App.css';



const articleStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  boxShadow: '0 19px 38px rgba(0,0,0,.1),0 15px 12px rgba(0,0,0,.12)',
  backgroundColor: 'whitesmoke',
  width: '500px',
  height: '405px',
  borderRadius: 8,
  marginLeft: '32%',
  marginTop: '1%',
}

const imgStyle = {
  width: '500px',
  height: '200px', 
  borderRadius: 2,
  alignSelf: 'flex-start',
  backgroundColor: '#adadad',
}


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      viceData: {},
      articleTitles: {},
      articleImgs: {},
      articleLink: {},
      articleDescription: {},
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=277f6193f589485587995aa39ef585ed')
         .then(d => d.json()) 
         .then(d => {
            const articleLinkList = []
            const articleTitleList = []
            const articleImgList = []
            const articleDescriptionList = []
           for(var i = 0; i < d.articles.length; i ++) {
             articleTitleList.push(d.articles[i].title)
             articleImgList.push(d.articles[i].urlToImage)
             articleLinkList.push(d.articles[i].url)
             articleDescriptionList.push(d.articles[i].description             )
           }
           this.setState({
             viceData: d,
             articleTitles: articleTitleList,
             articleImgs: articleImgList,
             articleLink: articleLinkList,
             articleDescription: articleDescriptionList,
           });
         });
        };
  
  
  render() {
   if (!this.state.viceData) return "Loading...";
    {console.log(this.state.viceData)}
   return (
      <div className="App" style={articleStyle}>
        <Article pic={this.state.articleImgs} articleLink={this.state.articleLink} />
        <ArticleTitle title={this.state.articleTitles} />
        <ArticleContent articleDisc={this.state.articleDescription} />
        <HeartButton />
      </div>
    );
  }
}



class ArticleTitle extends Component {
  render() {
    return (
      <h2 id="articleTitle">{this.props.title[8]}</h2>
    )
  }
}


class ArticleContent extends Component {
  render() {
    return (
      <p id="para" style={{fontSize: 19}}>{this.props.articleDisc[8]}</p>
    )
  }
}

class LikeCounter extends Component {

}


class HeartButton extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="like"/>
          <label for="like">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"/>
            </svg>
          </label>
      </div>
    )
  }
}
class Article extends Component {
  render() {
    return (
      <a href={this.props.articleLink[8]}>
        <img src={this.props.pic[8]} alt="this is a pic" style={imgStyle} />
      </a>
    )
  }
}


export default App;
