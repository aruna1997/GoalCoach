import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {teamref} from '../firebase';
class CreateTeam extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            tname:''
        }
    }
    addTeam()
    {
     const{email}=this.props.user;
     teamref.child('/'+this.state.tname).push({email}); 
    }
    render()
    {
        return(
            <div className="form-inline">
                <h3>Create Your Team</h3>
                <div className="form-group">
                <input className="form-control" placeholder="write your team name"
                 onChange={event=>{this.setState({tname:event.target.value})}} />
                 <hr />
                 <h4>Team Member</h4>
                 <input className="form-control" placeholder="Name" />
                 <button type="button" className="btn btn-success"
                  onClick={this.addTeam.bind(this)}>Submit team</button>
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