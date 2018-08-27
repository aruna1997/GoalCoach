import React,{Component} from 'react';
import {teamref} from '../firebase';
import {connect} from 'react-redux';
class AddGoal extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            title:''
        }
    }
    addGoal()
    {
        const{email}=this.props.user;
        const {title}=this.state;
        console.log('check link',);
        
        teamref.child(`/${this.props.activeTeam}/team-goals`).push({email,title});
    }
    render()
    {
        return(
            <div className="form-inline">
                <div className="form-group">
                <input type="text"
                placeholder="Add Goal"
                style={{margin:"5px"}}
                className="form-control"
                onChange={event=>{this.setState({title:event.target.value})}}
                />
                <button 
                className="btn btn-success"
                type="button"
                onClick={this.addGoal.bind(this)}
                >
                Submit
                </button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state)
{
    const{user,activeTeam}=state;
    return{
        user,activeTeam
    }
}
export default connect(mapStateToProps,null)(AddGoal);