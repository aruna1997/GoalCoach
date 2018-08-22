import React,{Component} from 'react';
import {completedgoalref,goalref} from '../firebase';
import {connect} from 'react-redux';
class GoalItem extends Component
{
    completeGoal()
    {
        const{email}=this.props.user;
        const{title,serverKey}=this.props.goal;
        completedgoalref.push({email,title});
        goalref.child(serverKey).remove();
    }
    render()
    {
        const {goal}=this.props;
        return(
            <div style={{margin:"5px"}}>
               <strong>{goal.title}</strong><span>  Submitted by  </span>
               <em>{goal.email}</em>
               <button style={{marginLeft:"5px"}} className="btn btn-sm btn-primary"
               onClick={this.completeGoal.bind(this)}>Complete</button>
            </div>
        )
    }
}
function mapStateToProps(state)
{
    const{user}=state;
    return{user};
}
export default connect(mapStateToProps,null)(GoalItem);