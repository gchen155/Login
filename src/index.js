import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
// import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
// import css

// amplify auth -> cognito

// class LoginInfo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: ''
//         }
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
        
//         try {
//             await Auth.signin(this.state.email, this.state.password);
//             alert("Logged in");
//         } catch(e) {
//             alert(e.message);
//         }
//     }
//     // <AmplifyAuthenticator usernameAlias="email" />
//     render() {
//         return (
//             <form id="Login" onSubmit={this.handleSubmit.bind(this)}>
//                 <FormGroup controlId="email">
//                     <ControlLabel>IAM Email</ControlLabel>
//                 </FormGroup>
//                 <FormControl
//                     type="email" 
//                     value={this.state.email}
//                     onChange={this.onEmailInsert.bind(this)} 
//                 /><br /><br />
//                 <FormGroup controlId="password">
//                     <ControlLabel>Password</ControlLabel>
//                 </FormGroup>
//                 <FormControl 
//                     type="password" 
//                     value={this.state.password}
//                     onChange={this.onPassInsert.bind(this)}
//                 /><br /><br />
//                 <h1>{this.state.email}</h1>
//                 <Button appearance="primary" type="submit">Login</Button>
//             </form>
//         )
//     }

//     onEmailInsert(event) {
//         this.setState({email: event.target.value})
//     }

//     onPassInsert(event) {
//         this.setState({password: event.target.value})
//     }
// }

// // onClick submit, the inputs go to amplify/dynamoDB system

function LoginInfo() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
      event.preventDefault();
      
      try {
          await Auth.signin(this.state.email, this.state.password);
          alert("Logged in");
      } catch(e) {
          alert(e.message);
      }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel><br />
                    <FormControl 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                </FormGroup><br />
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel><br />
                    <FormControl 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                </FormGroup><br />
                <Button appearance="primary" type="submit">Login</Button>
            </form>
        </div>
    );
}

ReactDOM.render(<LoginInfo />, document.getElementById('root'))