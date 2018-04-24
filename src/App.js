import React, { Component } from 'react';
import './App.css';



const articleStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  boxShadow: '0 10px 6px -6px #777',
  backgroundColor: 'whitesmoke',
  width: '600px',
  height: '300px',
  borderRadius: 20
}

const imgStyle = {
  width: '100%',
  height: '45%', 
  borderRadius: 5
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
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?' +
          'country=nl&' +
          'apiKey=277f6193f589485587995aa39ef585ed')
         .then(d => d.json()) 
         .then(d => {
            const articleTitleList = []
            const articleImgList = []
           for(var i = 0; i < d.articles.length; i ++) {
             articleTitleList.push(d.articles[i].title)
             articleImgList.push(d.articles[i].urlToImage)
           }
           this.setState({
             viceData: d,
             articleTitles: articleTitleList,
             articleImgs: articleImgList
           });
         });
        };
  
  
  render() {
   if (!this.state.viceData) return "Loading..."
    const viceData = this.state.viceData;
    JSON.stringify(viceData)
    return (
      <div className="App">
        <Article pic={this.state.articleImgs} />
      </div>
    )
  }
}







class Article extends Component {

  render() {
    return (
      <div className="articleBox" style={articleStyle}>
        <img src={this.props.pic[0]} alt="this is a pic" style={imgStyle} />
      </div>
    )
  }
}


export default App;
