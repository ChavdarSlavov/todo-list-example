import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/app';
import TodoList from '../containers/TodoListContainer';
import CompletedTasks from '../containers/CompletedTasksContainer';

export default function Routes(){
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TodoList} />
        <Route path="/completed" component={CompletedTasks} />
      </Route>
    </Router>
  );
}

/*
        <Route path="*" component={NoMatch} />
*/
