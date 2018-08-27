import {SIGNED_IN,SET_GOALS, SET_COMPLETED,
    SET_TEAMS,SET_ACTIVE,TEAM_GOALS,
    TEAM_COMPLETED,TEAM_MEMBERS} from '../constants';

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
export function setActiveTeam(team)
{
    const action={
        type:SET_ACTIVE,
        team
    }
    return action;
}
export function teamGoals(teamgoals)
{
    const action={
        type:TEAM_GOALS,
        teamgoals
    }
    return action;
}
export function completedTeamGoals(completedteamgoals)
{
    const action={
        type:TEAM_COMPLETED,
        completedteamgoals
    }
    return action;
}
export function listMember(teammembers)
{
    const action={
        type:TEAM_MEMBERS,
        teammembers
    }
    return action;
}