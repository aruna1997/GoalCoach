import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {userref} from '../firebase';
import {setTeams} from '../actions';
class TeamList extends Component
{
     encode(email)
    {
        let ab=email.toString().replace(/[^a-zA-Z@0-9 ]/g,"-dot-");
        return ab;
    }
    componentDidMount()
    {
      const {email}=this.props.user;
      let a;
      if(email!=null)
      {
          a=this.encode(email);
      }
      
      userref.child('/'+a+'/team').on('value',snap=>{
        const userteams=[];   
        snap.forEach(t=>{
            const tname=t.val();
            userteams.push(tname);
        })
        console.log('all team',userteams);
        this.props.setTeams(userteams);
      })
    } 
render()
{
    
    return(
        <div>
            {
             this.props.user ? console.log('render() this.props.teams', this.props.teams) : ''  
            }
        </div>
    )
}
}
function mapStateToProps(state)
{

    const{user,teams}=state;
    console.log('TeamList mapState: ',state);
    
    return{user,teams};
}
export default connect(mapStateToProps,{setTeams})(TeamList);