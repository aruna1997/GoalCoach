import * as firebase from 'firebase';
const config={
    apiKey: "AIzaSyBwJ4NaHZUUKFmVDojcwftrSnEua4RzUYI",
    authDomain: "goalcoach-c9481.firebaseapp.com",
    databaseURL: "https://goalcoach-c9481.firebaseio.com",
    projectId: "goalcoach-c9481",
    storageBucket: "",
    messagingSenderId: "477100455749"
};
export const firebaseApp=firebase.initializeApp(config);
export const goalref=firebase.database().ref('goals'); 
export const completedgoalref=firebase.database().ref('completedgoal');
export const teamref=firebase.database().ref('teams');   