import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,Switch} from 'react-router-dom';
import {firebaseApp} from './firebase';
import reducer from './reducer';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {logUser} from './actions';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

import { createBrowserHistory } from "history";
import CreateTeam from './components/CreateTeam';
const history = createBrowserHistory();

 const store=createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user=>{
    //console.log('user',user);
    
    if(user)
    {
        //console.log('login',user);
        const{email}=user;
        store.dispatch(logUser(email));
       history.push('/');
    }
    else{
        //console.log('logout');
        history.push('/SignIn')
    }
})


ReactDOM.render(  
    <Provider store={store}>
    <Router history = {history}>
        <Switch>
            <Route path='/test' render={props=>console.log('test,',props)
            } />
                <Route exact path="/" component={App} />
                <Route exact path="/SignIn" component={SignIn} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/ForgotPassword" component={ForgotPassword} />
                <Route exact path="/CreateTeam" component={CreateTeam} />
        </Switch>
    </Router>
    </Provider>
    ,document.getElementById('root')
)

/*

userref.on('value',userRef=>{
      let {email}=this.props.user;
      email = email ? this.encode(email) : '' ;
    const TeamListobj = userRef.child(`/${email}/team`).val();
    const teamListArr =  TeamListobj ? Object.values(TeamListobj) : null ;

        /* const userteams=[];
        teamRef.forEach(t=>{
            const tname=t.val();
            userteams.push(tname);
        })
        console.log('all team',userteams); 

        this.props.setTeams(teamListArr);

      })

*/