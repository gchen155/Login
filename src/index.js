import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
// import { Auth } from 'aws-amplify';
// import css

// amplify auth -> cognito
function LoginInfo() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
      event.preventDefault();
      
      // try {
      //     await Auth.signin(this.state.email, this.state.password);
      //     alert("Logged in");
      // } catch(e) {
      //     alert(e.message);
      // }
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