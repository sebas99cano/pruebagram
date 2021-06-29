import './App.css';
import firebase from "firebase";
import {Component} from "react";

class App extends Component {

    constructor() {
        super();
        this.state = {
            user:null
        }
    }

    componentWillUnmount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({user});
        })
    }

    handleAuth(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result =>
                console.log(`${result.user.email} ha iniciado sesion , ${result.user.displayName} , ${result.user.photoURL}`)
            )
            .catch(error => console.log(`Error ${error.code} : ${error.message}`))
    }

    renderLoginButton(){
        if(this.state.user !== null){

        }else{
            console.log(this.state)
            return(<button onClick={this.handleAuth}>Login con Google</button>);
        }
    }

    render() {
        return (
            <div>
                <h1>PruebaGram</h1>
                {this.renderLoginButton()}
            </div>
        );
    }
}

export default App;
