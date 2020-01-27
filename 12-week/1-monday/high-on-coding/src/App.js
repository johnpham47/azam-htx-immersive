import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import Headline from './Headline/Headline';
import Article from './Article/Article';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="head">
          <Header />
        </div>
        <div className="body">
          <Headline />
          <Article />
          <Article />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}
export default App;
