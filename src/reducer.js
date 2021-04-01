let lastId = 0;
import * as actions from './actionTypes';

export default function reducer(state = [], action) {
    if (action.type === actions.BUG_ADDED) {
        return ([...state, { description: action.payload.description, id: ++lastId, resolved: false }])
    }
    else if (action.type === actions.BUG_REMOVED) {
        return (state.filter(bug => bug.id !== action.payload.id));
    } else if (action.type === actions.BUG_RESOLVED) {
        return state.map(bug => bug.id !== action.payload.id ? bug : ({ ...bug, resolved: true }));

    } else
        return state;
}