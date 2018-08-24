import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {teamref} from '../firebase';
import {userref} from '../firebase';
class CreateTeam extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            tname:'',
            teamemail:''
        }
    }
    addTeam()
    { 
        const t=this.state.tname.trim(); 
        if(!(t.length==0))
        {
     const{email}=this.props.user;
     teamref.child('/'+this.state.tname+'/team-members').push({email});
     document.getElementById('create-team').style.display='none'; 
     document.getElementById('addmember').style.display='block';
        }
        else
        {
          alert('invalid input');
        }
    }
    encode()
    {
        const email=this.state.teamemail;
        let ab=email.toString().replace(/[^a-zA-Z@0-9 ]/g,"-dot-");
        return ab;
    }
    addTeamMember()
    {
        const t=this.state.teamemail.trim(); 
        if(!(t.length==0))
        {
        const email=this.state.teamemail;
        let a=this.encode();
        userref.child('/'+a+'/team').push(this.state.tname);
        teamref.child('/'+this.state.tname+'/team-members').push({email});
        document.getElementById('team-member').value="";
        }
        else
    {
      alert('invalid input');
    }
    }
    
    componentDidMount()
    {

        teamref.on('value',snap=>{
            const teams=[];
            console.log('snap',snap);
            
            snap.forEach( team=>{
                //console.log('team',team);
                
                const key = team.key;
                
                teamref.child('/'+key+'/team-members/').once('value',snap=>{
                    console.log('team-members',snap);
                    
                    const teammember=[];
                    snap.forEach( mem =>{
                        
                        const obj = mem.val();
                        //console.log('mem',obj.email);
                        
                    })
                })
                /* 
                const teamemail=[];
                n.map(l=>{teamemail.push(l);}) 
                teams.push(n);
                console.log('member',teamemail);
                */
            })
            console.log('teams',teams)
        })

    }
    render()
    {
        return(
            <div className="form-inline">
               <div id="create-team">
                <h3>Create Your Team</h3>
                <div className="form-group">
                <input className="form-control" placeholder="write your team name"
                 onChange={event=>{this.setState({tname:event.target.value})}} />
                 <hr />
                 <button type="button" className="btn btn-success"
                  onClick={this.addTeam.bind(this)}>Submit team</button>
                 </div>
                 </div>
                 <div id="addmember" style={{display:'none',margin:'10px'}}>
                 <h4>Add Team Members to {this.state.tname} team</h4>
                 <input className="form-control"
                  placeholder="Name" 
                  id="team-member"
                  onChange={event=>{this.setState({teamemail:event.target.value})}}
                  />
                 <button type="button" className="btn btn-success"
                  onClick={this.addTeamMember.bind(this)} 
                  >Add member</button>
                </div> 
            </div>
        )
    }
}
function mapStateToProps(state)
{
    const{user}=state;
    return{user};
}
export default connect(mapStateToProps,null)(CreateTeam);