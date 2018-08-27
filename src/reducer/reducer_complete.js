import { SET_COMPLETED,TEAM_COMPLETED } from '../constants';
export default (state=[],action)=>{

    switch(action.type)
    {
        case SET_COMPLETED:
            const {completedgoals}=action;
            return completedgoals;
        case TEAM_COMPLETED:
           const{completedteamgoals}=action;
           return completedteamgoals;
        
        
    }
    return state;
} 