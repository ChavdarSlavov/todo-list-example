import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';
import { List } from 'react-toolbox';

function getState(){
  return {
    todos: TodoStore.getState()
  };
}

export default class CompletedTasksContainer extends Component{
  constructor(props){
    super(props);
    this.state = getState();
  }

  render(){
    return (
      <div>
        <h1>TODOs</h1>
        <List>
        </List>
      </div>
    );
  }
}
