import {SIGNED_IN,SET_GOALS, SET_COMPLETED,SET_TEAMS} from '../constants';

export function logUser(email)
{
    const action={
        type:SIGNED_IN,
        email
    }
    return action;
}
export function setGoals(goals)
{
    const action={
        type:SET_GOALS,
        goals
    }
    return action;
}
export function completeIt(completedgoals)
{
    const action={
        type:SET_COMPLETED,
        completedgoals
    }
    return action;
}
export function setTeams(userteams)
{
    const action={
        type:SET_TEAMS,
        userteams
    }
    return action;
}