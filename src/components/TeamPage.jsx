import React,{Component} from 'react';
import {connect} from 'react-redux';
import TeamAddGoal from './TeamAddGoal';
import TeamGoalList from './TeamGoalList';
import TeamCompletedGoalList from './TeamCompletedGoalList';
import TeamMembers from './TeamMembers';
class TeamPage extends Component
{
  render()
  {
   return(
       <div>
       <h3>{this.props.activeTeam} Team Page</h3>
       <TeamAddGoal />
       <TeamGoalList />
       <TeamCompletedGoalList />
       <TeamMembers />
       </div>
   )
  }
}
function mapStateToProps(state)
{
    const{activeTeam,user}=state;
    return{activeTeam,user}
}
export default connect(mapStateToProps,null)(TeamPage);