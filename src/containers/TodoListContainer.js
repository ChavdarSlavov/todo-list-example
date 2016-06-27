import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';
import { createTask } from '../actions/TodoActions';
import { List, ListCheckbox, ListSubHeader } from 'react-toolbox';
import TodoSection from '../components/Todos/TodoSection';
function getState(){
  return {
    todos: TodoStore.getState()
  };
}

export default class TodoListContainer extends Component{
  constructor(props){
    super(props);
    this.state = getState();
  }

  componentDidMount(){
    TodoStore.addChangeListener(this.handleStoreChange);
  }

  componentWillUnmount(){
    TodoStore.removeChangeListener(this.handleStoreChange);
  }

  generateTaskList = todos => {
    return todos.map((task, index) => {
      return (
        <ListCheckbox
          key={index}
          caption={task.value}
          checked={task.checked}
        />
      );
    });
  }

  handleTaskAdded = value => {
    createTask(value);
  }

  handleStoreChange = () => {
    this.setState(getState());
  }

  render(){
    const taskList = this.generateTaskList(this.state.todos);
    return (
      <TodoSection onAdd={this.handleTaskAdded}>
        <List>
          <ListSubHeader caption="TODO List" />
          {taskList}
        </List>
      </TodoSection>
    );
  }
}
