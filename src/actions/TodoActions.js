import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

export function createTask(value){
  AppDispatcher.dispatch({
    actionType: TodoConstants.CREATE,
    value
  });
}

export function destroyTask(){
  return 1;
}
