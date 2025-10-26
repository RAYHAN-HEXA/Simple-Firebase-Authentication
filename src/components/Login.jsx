import { GoogleAuthProvider } from 'firebase/auth';

import React from 'react';
import { auth } from '../firebase/firebase.config';
import { signInWithPopup } from 'firebase/auth';



const googleProvider = new GoogleAuthProvider();

const Login = () => {

      const handleGoogleSignIn = () => {
 
           signInWithPopup(auth,googleProvider)
           .then(result =>{
            console.log(result)
           })
           .catch(error =>{
console.log( error)
           })
      
      }

      
          return (
                    <div>
                          <h1>please Login</h1>    
                          <button onClick={handleGoogleSignIn}  >Sign In With Google</button>
                    </div>
          );
};

export default Login;