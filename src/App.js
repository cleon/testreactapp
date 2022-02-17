import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import logo from './logo.svg';
import './App.css';

function App({ flags, ldClient }) {

  console.log('App loaded, flag is: %s', flags.demoTheme);

  ldClient.on('change:demoTheme', (current, previous) => {
    console.log('SPECIFIC FLAG CHANGED: current: %s, previous: %s', current, previous);
  });

  ldClient.on('change', (change) => {
    console.log('CHANGE DETECTED');
  });

  // function updateIdentity() {
  //   const user = ldClient.getUser();
  //   ldClient
  //     .identify({ ...user, custom: { ...user.custom, selection: 'SOMETHING NEW' } })
  //     .then(() => {
  //       console.log('User selection updated');
  //     });
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>SETUP:<br />
          1. In LD, create a string flag with at least two variations.<br />
          2. Create a .env.local file with your client side ID.<br />
          3. npm install<br/>
          4. npm run start<br />
        </h2>
        <h2>Steps to re-create:<p />
          1. Load this page, check Console output.<p />
          2. Toggle the flag in LD. Should see one event for each listener in console.log. Yay!<p />
          3. Go back to LD and toggle the flag again.<p />
          4. I see two events fire for each listener. <p />
        </h2>
        <h1>
          Question: Why do these flag change events both fire twice after the second toggle?
        </h1>
        {/* <button onClick={updateIdentity}>ldClient.identify()</button> */}
      </header>
    </div>
  );
}

export default withLDConsumer()(App);
