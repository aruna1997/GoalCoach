import {SIGNED_IN} from '../constants';

export default (state=[],action)=>
{
    switch(action.type)
    {
      case SIGNED_IN:
      const{email}=action;
      const user={
          email
      }
      return user;

      default:
      return state;
    }
}