import React from 'react';
import './App.css';
//import SignIn from './Components/SignIn/SignIn';
import UserDashboard from './Components/Dashboard/UserDashboard/UserDashboard';

class App extends React.Component {
    render() {
        return (
            //<SignIn />
            <UserDashboard/>
        );
    }
}

export default App;