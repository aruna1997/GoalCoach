import React,{ Component} from 'react';
import {teamref} from '../firebase';
import {connect} from 'react-redux';
import {completedTeamGoals} from '../actions';
class CompletedGoals extends Component{
   componentDidMount()
    {
        
        teamref.child(`/${this.props.activeTeam}/completed-team-goals`)
        .on('value',snap=>{
        let completedteamgoals=[];
        snap.forEach(completedgoal=>{
             const{email,title}=completedgoal.val();
             completedteamgoals.push({email,title});
         });
         this.props.completedTeamGoals(completedteamgoals);
      } )
       
    }
    
    render()
    {
        console.log('check',this.props.completedgoals);
        return(
            <div style={{margin:"5px"}}>
            <h4>{this.props.activeTeam} Team Completed Goals</h4>
            <div>
                {
                this.props.completedgoals.map((complete,index)=>{
                    const {title,email}=complete;
                    return( 
                        <div key={index} style={{margin:"5px"}}>
                        <strong>{title}</strong><span>  completed by  </span>
                        <em>{email}</em>
                     </div>
                    )
                })
                }
            </div>
            </div>
        )
    }
}
function mapStateToProps(state)
{
    const {completedgoals,user,activeTeam}=state;
    return{
        completedgoals,user,activeTeam
    }
}
export default connect(mapStateToProps,{completedTeamGoals})(CompletedGoals);