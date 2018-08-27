import React,{Component} from 'react';
import {teamref} from '../firebase';
import {teamGoals} from '../actions';
import {connect} from 'react-redux';
import GoalItem from './GoalItem';
class GoalList extends Component
{
    componentDidMount()
    {
        teamref.child(`/${this.props.activeTeam}/team-goals`)
        .on('value',snap=>{
        const teamgoals=[];
           snap.forEach(goal=>{
               const {email,title}=goal.val();
               const serverKey=goal.key;
               teamgoals.push({email,title,serverKey});
            })
            this.props.teamGoals(teamgoals);
            console.log('team goals',teamgoals);
       })
    }
    completeGoal(goal)
    {
        const{email}=this.props.user;
        const{title,serverKey}=goal;
        teamref.child(`/${this.props.activeTeam}/completed-team-goals`).push({email,title});
        teamref.child(`/${this.props.activeTeam}/team-goals`).child(serverKey).remove();
    }
    
    render()
    {
        return(
            <div style={{margin:"5px"}}>
            <h4>{this.props.activeTeam} Team Goals</h4>
            <div>
            {
                this.props.goals.map((goal,index)=>{
                    return(
                        <div key={index} style={{margin:"5px"}}>
                        <strong>{goal.title}</strong><span>  Submitted by  </span>
                        <em>{goal.email}</em>
                        <button style={{marginLeft:"5px"}} className="btn btn-sm btn-primary"
                       onClick={this.completeGoal.bind(this,goal)}>Complete</button>
                        </div>
                    )
                }

                )
            }
            </div>
            </div>
        )
    }
}
function mapStateToProps(state)
{
    const{goals,user,activeTeam}=state;
  return{
    goals,user,activeTeam
  }
}

export default connect(mapStateToProps,{teamGoals})(GoalList);