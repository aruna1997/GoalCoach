import React,{ Component} from 'react';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import TeamList from './TeamList';
import CompletedGoals  from './CompletedGoals';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

if (firebaseApp.auth().isSignInWithEmailLink(window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  var email = window.localStorage.getItem('emailForSignIn');
  
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  firebaseApp.auth().signInWithEmailLink(email, window.location.href)
    .then(function(result) {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch(function(error) {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}

class App extends Component
{
  signOut()
  {
    firebaseApp.auth().signOut();
  }
  
 render()
    {
      return(
            <div style={{margin:"10px"}}>
              <h3>App</h3>
              <AddGoal />
              <hr />
              <GoalList />
              <hr />
              <CompletedGoals />
              <hr />
              <button
              className="btn btn-danger"
              onClick={this.signOut.bind(this)}
              >
              Logout
              </button>
              <Link to={'/CreateTeam'} style={{margin:"5px"}}>Create Team</Link>
              <TeamList />
            </div>
            )
    }
}
function mapStateToProps(state)
{
  const{user}=state;
  return{user};
}

export default connect(mapStateToProps,null)(App);