import { combineReducers } from 'redux';
import goals from './reducer_goals';
import user from './reducer_user';
import completedgoals from './reducer_complete';
export default combineReducers({
    user,goals,completedgoals
})