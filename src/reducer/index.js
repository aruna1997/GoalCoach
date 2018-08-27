import { combineReducers } from 'redux';
import goals from './reducer_goals';
import user from './reducer_user';
import completedgoals from './reducer_complete';
import teams from './reducer_teams';
import activeTeam from "./reducer_activeTeam";
import teamMembers from "./reducer_teammember";
export default combineReducers({
    user,goals,completedgoals,teams,activeTeam,teamMembers
})