import React,{Component} from 'react';
import {teamref} from '../firebase';
import {connect} from 'react-redux';
import {listMember} from '../actions';
class TeamMembers extends Component
{
    componentWillMount()
    {
        teamref.child(`/${this.props.activeTeam}/team-members`)
        .on('value',snap=>{
            let teammembers=[];
            snap.forEach((member)=>{
                const email=member.val();
                teammembers.push(email);
            })
            this.props.listMember(teammembers);
        })
    }
    render()
    {
        return(
            <div>
            <h4>Listed Team members</h4>
            <div>
                {
                    this.props.teamMembers.map((member,index)=>{
                       return( <div key={index}>{member.email}</div>
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
    const{activeTeam,teamMembers}=state;
    return{activeTeam,teamMembers};
}
export default connect(mapStateToProps,{listMember})(TeamMembers);