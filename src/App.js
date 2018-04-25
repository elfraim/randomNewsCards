import React, { Component } from 'react';
import ArticleTitle from './components/ArticleTitle.js';
import HeartButton from './components/HeartButton.js';
import ArticlePic from './components/ArticlePic.js';
import ArticleContent from './components/ArticleContent.js';
import LikeCounter from './components/LikeCounter.js';
import './App.css';


const titleStyle = {
  display: 'flex',
  borderRadius: 8,
  marginLeft: '32%',
  marginTop: '1%',
  color: 'white',
  textShadow: '6px 6px 0px rgba(0,0,0,0.2)',
}

const articleStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexFlow: 'row wrap',
  boxShadow: '0 19px 38px rgba(0,0,0,.1),0 15px 12px rgba(0,0,0,.12)',
  backgroundColor: 'whitesmoke',
  width: '500px',
  height: '405px',
  borderRadius: 8,
  marginLeft: '32%',
  marginTop: '1%',
  maxHeight: '405px',
}

class MainBlock extends Component {
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
      likeCounter: 0,
      likeStatus: false,
      setArticleNum: 5,
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    var likeStatus = this.state.likeStatus
    var clickCounter = null
    if (likeStatus === false) { 
      clickCounter++
      this.setState({
        likeCounter: clickCounter,
        likeStatus: true
    })} else if (likeStatus === true) {
      clickCounter-1
      this.setState({
        likeCounter: clickCounter,
        likeStatus: false
    })}
  }


  componentDidMount() {
    var randomInt = Math.floor(Math.random() * (19 - 0) + 0);
    this.setState({
      setArticleNum: randomInt,
      });

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
    return (
       <div className="App" style={articleStyle}>
        <ArticlePic pic={this.state.articleImgs} articleLink={this.state.articleLink} articleNum={this.state.setArticleNum} />
        <ArticleTitle title={this.state.articleTitles} articleNum={this.state.setArticleNum} />
        <ArticleContent articleDisc={this.state.articleDescription} articleNum={this.state.setArticleNum} />
        <LikeCounter counter={this.state.likeCounter} /> 
        <HeartButton handleClick={this.handleClick}/>
      </div>
    )
  }
}



export default class App extends Component {
  render() {
   return (
     <div>
     <h1 style={titleStyle}>Generates random news articles</h1>
      <MainBlock />
      <MainBlock />
      <MainBlock />
      <MainBlock />
     </div>
    );
  }
}
