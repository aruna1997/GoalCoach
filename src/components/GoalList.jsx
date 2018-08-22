import React,{Component} from 'react';
import {goalref} from '../firebase';
import {setGoals} from '../actions';
import {connect} from 'react-redux';
import GoalItem from './GoalItem';
class GoalList extends Component
{
    componentDidMount()
    {
       goalref.on('value',snap=>{
        const goals=[];
        const uemail=this.props.user.email;
           snap.forEach(goal=>{
               const {email,title}=goal.val();
               const serverKey=goal.key;
               if(uemail===email)
               {
               goals.push({email,title,serverKey});
               }
            })
            this.props.setGoals(goals);
       })
    }

    render()
    {
        return(
            <div style={{margin:"5px"}}>
            <h4>Your Goals</h4>
            <div>
            {
                this.props.goals.map((goal,index)=>{
                    return(
                        <GoalItem key={index} goal={goal} />
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
    const{goals,user}=state;
  return{
    goals,user
  }
}

export default connect(mapStateToProps,{setGoals})(GoalList);