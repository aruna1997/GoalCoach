import {TEAM_MEMBERS} from '../constants';
export default (state=[],action)=>{
    switch(action.type)
    {
        case TEAM_MEMBERS:
        const{teammembers}=action;
        return teammembers;
    }
    return state;

}