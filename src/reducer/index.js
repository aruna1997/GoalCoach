import { combineReducers } from 'redux';
import goals from './reducer_goals';
import user from './reducer_user';
import completedgoals from './reducer_complete';
import teams from './reducer_teams';
export default combineReducers({
    user,goals,completedgoals,teams
})