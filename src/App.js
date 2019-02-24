import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Filter/Filter.jsx';
import Content from './components/Content/Content.jsx';
import {Container} from "./styles/styles.js";
import moment from 'moment';

moment.locale('ru');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <Sidebar/>
          <Content/>
        </Container>
      </div>
    );
  }
}

export default App;
