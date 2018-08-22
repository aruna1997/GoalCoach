import React,{ Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router-dom';


class SignUp extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:'',
            error:{
                message:''
            }
        }
    }
    signUp()
    {
        const { email,password}=this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
        .catch(error => { 
            this.setState({error})
           })
    }
    emailsignUp()
    {
            const { email}=this.state;
            var actionCodeSettings = {
                // URL you want to redirect back to. The domain (www.example.com) for this
                // URL must be whitelisted in the Firebase Console.
                // url: 'https://www.example.com/?email=' + email,
                // This must be true.
                url: 'http://localhost:3000/?email='+email,
                handleCodeInApp: true,
              };
            firebaseApp.auth().sendSignInLinkToEmail(email,actionCodeSettings)
            .then(function() {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
              })
        .catch(error => { 
          this.setState({error})
         })
    }
 render()
    {
      return(
            <div className="form-inline" style={{margin:'5%'}}>
            <h2>Sign Up</h2>
            <div className="form-group">
            <input className="form-control"
            style={{marginRight:'5px'}}
            type="text"
            placeholder="email"
            onChange={event=>this.setState({email:event.target.value})}
             />
             <input className="form-control"
             style={{marginRight:'5px'}}
            type="password"
            placeholder="password"
            onChange={event=>this.setState({password:event.target.value})}
             /> 
             <button className="btn btn-primary"
            type="button"
            onClick={this.signUp.bind(this)}
             >SignUp</button>
             <div>{this.state.error.message}</div>
             <div><Link to={'/signIn'}>Already a User?SignIn</Link></div>
             <button className="btn btn-primary"
            type="button"
            onClick={this.emailsignUp.bind(this)}
             >SignUp with email</button>
            </div>
            </div>
            )
    }
}
export default SignUp;