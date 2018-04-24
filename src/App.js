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



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      viceData: {},
      articleTitles: {},
    }
  }



  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?' +
          'country=nl&' +
          'apiKey=277f6193f589485587995aa39ef585ed')
         .then(d => d.json()) 
         .then(d => {
           this.setState({
             viceData: d
           });
         });
        };


  render() {
   if (!this.state.viceData) return "Loading..."
    const viceData = this.state.viceData;
    JSON.stringify(viceData)
    return (
      <div className="App">
        <Article />
        {console.log(viceData.articles)}
      </div>
    )
  }
}










class Article extends Component {
  render() {
    return (
      <div className="articleBox" style={articleStyle}>
      </div>
    )
  }
}


export default App;
