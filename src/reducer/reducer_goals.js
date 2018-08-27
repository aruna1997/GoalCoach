import { SET_GOALS,TEAM_GOALS } from '../constants';
export default (state=[],action)=>{
    switch(action.type)
    {
        case SET_GOALS:
        const{goals}=action;
        return goals;
        break;
        case TEAM_GOALS:
        const{teamgoals}=action;
        return teamgoals;
        break;
        default:
        return state;
    }
}