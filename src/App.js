import logo from './appz.svg';
import './App.css';
import {Amplify} from 'aws-amplify';
import { withAuthenticator} from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createTheme } from '@aws-amplify/ui-react';
import awsExports from './aws-exports'; 
Amplify.configure(awsExports);


function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Welcome, {user.username}</p>
              <button onClick={signOut}>Sign out</button>
                <h2>Welcome To Appz</h2>
            </header>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);