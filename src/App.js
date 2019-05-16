import React from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = [
  {
    quote: "Stay Hungry. Stay Foolish.",
    author: "Steve Jobs"
  },
  {
    quote: "Good Artists Copy, Great Artists Steal.",
    author: "Pablo Picasso"
  },
  {
    quote: "Argue with idiots, and you become an idiot.",
    author: "Paul Graham"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo Da Vinci"
  }
];

var color = ['#FF5733', '#FFBD33', '#75FF33', '#33FF57', '#33FFBD'];

var Index = Math.floor(Math.random() * quotes.length);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({ index: Math.floor(Math.random() * quotes.length) });
    //var Index = Math.floor(Math.random() * quotes.length);

  }


  render() {

    let quote = quotes[this.state.index].quote;
    let authorName = quotes[this.state.index].author;
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + quote + " By " + authorName;

    return (
      <div id="container" style={{
        backgroundColor: color[this.state.index],
        height: '100%', textAlign: 'center'
      }}>
        <div id="quote-box" style={{
          backgroundColor: '#FFFFFF', color: color[this.state.index],
          height: '300px', width: '500px', margin: '50px', padding: '50px',
          display: 'inline-block'
        }}>
          <div id="text">
            <h1>{quotes[this.state.index].quote}</h1>
          </div>
          <div id="author" style={{ textAlign: 'right' }}>
            <p>-{quotes[this.state.index].author}</p>
          </div>

          <a id='tweet-quote' href={tweetUrl}>tweet</a>

          <button id="new-quote" onClick={this.handleClick}
            style={{
              backgroundColor: color[this.state.index],
              textAlign: 'right', borderRadius: '8px', color: 'white'
            }}>
            <h3>New Quote</h3></button>

        </div>
      </div>
    );
  }
}

export default App;