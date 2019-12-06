import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CategoryList from './components/CategoryList';
import CreateCategoryPage from './components/CreateCategoryPage';

export class CategoryPage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/category" component={CategoryList} />
        <Route path="/category/add" render={props => <CreateCategoryPage {...props} type="add"/>} />
        <Route path="/category/edit/:id" render={props => <CreateCategoryPage {...props} type="edit" />} />
      </Switch>
    )
  }
}

export default CategoryPage
