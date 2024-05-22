import React from 'react';
import logo from '../../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import './UserDashboard.scss'

class UserDashboard extends React.Component {
  render(){
    return(
      <div className='d-flex mx-3 mt-2'>
        <div className='sidebar'>
            <div className='d-flex flex-column gap-4'>
                  <div className='d-flex'>
                    <img src={logo} alt="praval-logo" width={30}/>
                    <p className='h4 ms-3'>Dashboard</p>
                  </div>
                  <div className='d-flex flex-column sidebar-list'>
                      <ul className="list-unstyled mt-3">
                        <li><a href='#' className='link' >Home</a></li>
                        <li><a href='#' className='link'>IT Support</a></li>
                        <li><a href='#' className='link'>My Requests</a></li>
                        <li><a href='#' className='link'>Profile</a></li>
                      </ul>
                  </div>
            </div>
        </div>
        <div className='d-flex flex-column gap-4 main ms-3'>
          <header className='d-flex justify-content-end pe-3 pb-3'>
              <p className='h4'><span>Welcome, </span>Andrew Philips</p>
          </header>
          <div className='data'>
              
          </div>
        </div>
      </div>
    );
  }  
}

export default UserDashboard;
