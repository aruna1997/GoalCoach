import { SET_ACTIVE} from '../constants';
export default (state=[],action)=>
{
    switch(action.type)
    {
     case SET_ACTIVE:
     const {team}=action;
     return team;
     default:
        return state;
    }
}



