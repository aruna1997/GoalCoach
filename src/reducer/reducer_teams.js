import {SET_TEAMS, SET_ACTIVE} from '../constants';
export default (state=[],action)=>
{
    switch(action.type)
    {
        case SET_TEAMS:
        const{userteams}=action;
        return userteams;
        default:
        return state;
    }
}