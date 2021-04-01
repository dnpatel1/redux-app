import store from './store';
import * as actions from './actionTypes';
import { bugAdded } from './actions';

const unsubscribe = store.subscribe(() => {
    console.log("store changed! ", store.getState());
})

store.dispatch(bugAdded('Bug1'))

unsubscribe();

store.dispatch({
    type: actions.BUG_RESOLVED,
    payload: {
        id: 1
    }
})
console.log("Hello World!");
console.log(store.getState());

