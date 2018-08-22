import React,{ Component} from 'react';
import {completedgoalref} from '../firebase';
import {connect} from 'react-redux';
import {completeIt} from '../actions';
class CompletedGoals extends Component{
   componentDidMount()
    {
        
      completedgoalref.on('value',snap=>{
        let completedgoals=[];
    
         const uemail=this.props.user.email;
         snap.forEach(completedgoal=>{
             const{email,title}=completedgoal.val();
             if(email===uemail)
             {
             completedgoals.push({email,title});
             }
         });
          
         this.props.completeIt(completedgoals);
      } )
       
    }
    
    render()
    {
        console.log('check',this.props.completedgoals);
        return(
            <div style={{margin:"5px"}}>
            <h4>Completed Goals</h4>
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
   
    
    const {completedgoals,user}=state;

    //console.log('completed: ',completedgoals);

    return{
        completedgoals,user
    }
}
export default connect(mapStateToProps,{completeIt})(CompletedGoals);