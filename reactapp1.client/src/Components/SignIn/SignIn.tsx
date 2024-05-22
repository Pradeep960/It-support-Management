import React from 'react';
import logo from '../../assets/Latest-Logo.png';
import image from '../../assets/it_support.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.scss';

import {
    MDBBtn,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';

class SignIn extends React.Component {
    render() {
        return (
            <div className="d-flex mx-4">

                <div className='d-flex'>
                    <img src={image}
                        alt="Login image" className="w-100 rounded support_img" />
                </div>

                <div className='d-flex flex-column w-50'>

                    <div className='d-flex justify-content-center'>
                        <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                        <img src={logo} alt="Login image" />
                    </div>

                    <div className='d-flex flex-column justify-content-center gap-4 h-custom-2 w-75 pt-4'>

                        <h3 className="fw-normal ps-5 " style={{ letterSpacing: '1px' }}>Log in</h3>

                        <MDBInput wrapperClass='mx-5 w-100' placeholder='Email address' id='formControlLg' type='email' size="lg" />
                        <MDBInput wrapperClass='mx-5 w-100' placeholder='Password' id='formControlLg' type='password' size="lg" />

                        <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
                    </div>

                </div>

            </div>
        );
    }
}

export default SignIn;