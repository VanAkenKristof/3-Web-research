import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEGNW63-MiuHFPY-W-J72kKzXsf0YuJR8",
    authDomain: "fishes-47936.firebaseapp.com",
    databaseURL: "https://fishes-47936.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;