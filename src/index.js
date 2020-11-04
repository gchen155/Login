import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'; //AmplifySignOut
//import awsconfig from './aws-exports';

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import config from './config';
import './index.css';

// amplify auth -> cognito
Amplify.configure(config);
// {
//     Auth: {
//       mandatorySignIn: true,
//       region: config.cognito.REGION,
//       userPoolId: config.cognito.USER_POOL_ID,
//       identityPoolId: config.cognito.IDENTITY_POOL_ID,
//       userPoolWebClientId: config.cognito.APP_CLIENT_ID
//     },
//     Storage: {
//       region: config.s3.REGION,
//       bucket: config.s3.BUCKET,
//       identityPoolId: config.cognito.IDENTITY_POOL_ID
//     }
//   }

const App = () => (
    <div>
      <LoginInfo />
      Log in
    </div>
  );
  
export default withAuthenticator(App);

function LoginInfo() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Auth.signUp({
    //     username: 'gchen19@gmail.com',
    //     password: 'Heyman123!',
    //     attributes: {
    //         email: 'gchen19@gmail.com',
    //     },
    // });

    async function handleSubmit(event) {
      event.preventDefault();
      
        Auth.signin(username, password)
            .then(success => console.log("Logged in"))
            .catch(err => console.log(err+"bad"));
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="user" bsSize="large">
                    <ControlLabel>Username</ControlLabel><br />
                    <FormControl 
                    type="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                </FormGroup><br />
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel><br />
                    <FormControl 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                </FormGroup><br />
                <Button appearance="primary" type="submit">Login</Button><br />
                <Button appearance="primary" onClick={signOut}>Sign Out</Button><br />
            </form>
        </div>
    );
    // <Button appearance="primary" onClick=>Sign Up</Button></Button>

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (e) {
            console.log("error signing out: ", e.message);
        }
    }
}

ReactDOM.render(<LoginInfo />, document.getElementById('root'))