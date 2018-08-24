import {SET_TEAMS} from '../constants';
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