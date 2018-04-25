import React, {Component} from 'react';
import ArticleTitle from './ArticleTitle.js';
import HeartButton from './HeartButton.js';
import ArticlePic from './ArticlePic.js';
import ArticleContent from './ArticleContent.js';
import LikeCounter from './LikeCounter.js';



export default class MainBlock extends Component {
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
         <div className="App articleStyle">
          <ArticlePic pic={this.state.articleImgs} articleLink={this.state.articleLink} articleNum={this.state.setArticleNum} />
          <ArticleTitle title={this.state.articleTitles} articleNum={this.state.setArticleNum} />
          <ArticleContent articleDisc={this.state.articleDescription} articleNum={this.state.setArticleNum} />
          <LikeCounter counter={this.state.likeCounter} /> 
          <HeartButton handleClick={this.handleClick}/>
        </div>
      )
    }
  }