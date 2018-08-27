import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {userref} from '../firebase';
import {Link,Redirect,withRouter} from 'react-router-dom'
import {setTeams,setActiveTeam} from '../actions';
import '../App.css';
class TeamList extends Component
{
    encode(email)
    {
        let ab=email.toString().replace(/[^a-zA-Z@0-9 ]/g,"-dot-");
        return ab;
    }
    componentDidMount()
    {
        userref.on('value',t=>{
            const {email}=this.props.user;
            let a;
            if(email!=null)
            {
                a=this.encode(email);
            }
             userref.child('/'+a+'/team').on('value',snap=>{
                let userteams=[];     
                snap.forEach(t=>{
                    const tname=t.val();
                    userteams.push(tname);
                })
                console.log('all team',userteams);
                this.props.setTeams(userteams);
            })
        })
    }
   openteamPage(team)
   {    
   
       this.props.setActiveTeam(team);
       this.props.history.push('/TeamPage');
   }
    render()
    {
        return(
            <div>
                <h3>Your Teams</h3>
            <div>
            { this.props.user ? 
                this.props.teams.map((team,k)=>(
                    <div key={k}>
                    <div className="card">
                    {team}
                    </div>
                    <button className="btn btn-success" onClick={this.openteamPage.bind(this,team)}>Open</button>
                    </div>
                ))        
                : ''  
            }
            </div>
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
export default withRouter(connect(mapStateToProps,{setTeams,setActiveTeam})(TeamList));