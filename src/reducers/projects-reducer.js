import { FETCH_PROJECTS } from '../actions/actions';

const INITIAL_STATE = {projects: []};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PROJECTS:
            return { ...state, projects: action.payload.data };
    
        default:
            return state;
    }
}