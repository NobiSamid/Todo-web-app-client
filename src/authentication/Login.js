import React from 'react';
import { useHistory, useLocation } from 'react-router';
// import { useHistory, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';

const Login = () => {

    const { signInUsingGoogle, setUser, setIsLoading, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home' ;


    const handleGoogleLoginRedirect = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
            setUser(result.user);
            setError("");
        })
        .catch(error =>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false));
    }
    return (
        <div>
             <div className="login-page">
                <div className="quote-div">
                    <p className="quote">“Good health is not something we can buy. However, it can be an extremely valuable savings account.” <span> – Anne Wilson Schaef</span></p>
                </div>
                <button onClick={handleGoogleLoginRedirect} >Google Sign-in</button>
            </div>
            
        </div>
    );
};

export default Login;