import React from 'react';

import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/signup/sign-up.component';

import './sign-in-and-up.styles.scss';

const SignInAndUp = () => (
    <div className='sign-in-and-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndUp;