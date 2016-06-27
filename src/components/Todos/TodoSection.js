import React, { Component, PropTypes } from 'react';
import { Input, Button } from 'react-toolbox';
import { trim } from 'lodash';
import styles from './styles.scss';

export default class TodoSection extends Component{
  static propTypes = {
    onAdd: PropTypes.func
  }

  state = {
    task: ''
  }

  addTask = value => {
    const task = trim(value);
    const { onAdd } = this.props;
    if (task.length && onAdd){
      onAdd(task);
      this.clearTask();
    }
  }

  clearTask = () => {
    this.setState({
      task: ''
    });
  }


  handleTaskInputChange = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleAddBtnClick = event => {
    this.addTask(this.state.task);
  }

  render(){
    const { children } = this.props;
    return (
      <div className={styles.todoSection}>
        {children}
        <div className={styles.task}>
          <Input
            type="text"
            label="Task"
            required={true}
            value={this.state.task}
            onChange={this.handleTaskInputChange.bind(this, 'task')}
            maxLength={16}
          />
        </div>
        <Button
          icon="add"
          label="Add this"
          flat={true}
          primary={true}
          onClick={this.handleAddBtnClick}
        />
      </div>
    );
  }
}
