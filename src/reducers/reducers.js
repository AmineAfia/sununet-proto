import { combineReducers } from 'redux';

import ProjectsReducer from './projects-reducer';

const rootReducer = combineReducers({
    projects: ProjectsReducer
});

export default rootReducer