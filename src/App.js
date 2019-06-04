import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Switch, Route } from 'react-router-dom';

import Layout from "./HOC/Layout/Layout";
import UnitSelector from './containers/UnitSelector/UnitSelector';
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
      </React.Fragment>
    );
  }
}

export default App;
