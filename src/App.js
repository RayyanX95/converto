import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import Layout from "./HOC/Layout/Layout";
import UnitSelector from './containers/UnitSelector/UnitSelector';
import AlertMessage from './components/AlertMessage/AlertMessage';
import InputHandling from './containers/InputHandling/InputHandling';

import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <UnitSelector />
          <InputHandling />
        </Layout>
        <AlertMessage />
      </React.Fragment>
    );
  }
}

export default App;
