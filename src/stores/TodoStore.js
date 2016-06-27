import FluxStore from './FluxStore';
import { clone } from 'lodash';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

let todoState = [];

function createItem(value){
  todoState.push({
    value,
    completed: false
  });
}

class TodoStore extends FluxStore{
  getState(){
    return clone(todoState);
  }
}

const storeInstance = new TodoStore();

TodoStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.type){
    case TodoConstants.create:
      createItem(action.value);
      break;

    default:
      return;
  }

  storeInstance.emitChange();
});

export default storeInstance;
