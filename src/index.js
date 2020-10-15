import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Amplify, Auth } from 'aws-amplify';
import config from 'cofig.js';
// import css

// amplify auth -> cognito
function LoginInfo() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
      event.preventDefault();
      
      try {
          await Auth.signin(email, password);
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

// async function signOut() {
//   try {
//     await Auth.signOut();
//   } catch (e) {
//     console.log(e.message);
//   }
// }

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  }
});

ReactDOM.render(<LoginInfo />, document.getElementById('root'))