import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './container/HomePage';
import UploadPage from './container/UploadPage';
import CategoryPage from './container/CategoryPage';
import GlobalModal from './container/GlobalModal';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/upload-profile" component={UploadPage} />
          <Route path="/category" component={CategoryPage} />
          <Route exact path="/global-modal" component={GlobalModal} />        
        </Switch>
        <GlobalModal />
      </>
    );
  }
}

export default App;
