import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { useState } from 'react';



const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null); // State to hold the user data

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user); // Logging user data
        setUser(result.user); // Storing user data in state
      })
      .catch(error => {
        console.log(error); // Logging any errors that occur during sign-in
      });
  };

  const handleGoogleSignout = () =>{
   signOut(auth)
   .then(() =>{
      console.log('sign out done')
      setUser(null);
   })
 .catch (error =>{
      console.log(error);
 })
  }

  const handleGithubSignIn = ()=>{
      signInWithPopup(auth,gitHubProvider)
      .then( result => {
            console.log(result.user);
            const loggedInUser = result.user;
            if (!loggedInUser.email){
                  if (loggedInUser.providerData){
                        const gitProvider = loggedInUser.providerData.find(p => p.providerId === 'github.com');
          if (gitProvider && gitProvider.email) {
            loggedInUser.email = gitProvider.email;
          }
        }
      }

      setUser(loggedInUser); 
                  
            
      });

  }
  return (
    <div>
      <h1>Please Login</h1>  
      {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      <button onClick={handleGoogleSignout} > Sign Out</button> */}
{
      user ?
       <button onClick={handleGoogleSignout} > Sign Out</button>:  
          <>
           <button onClick={handleGoogleSignIn}>Sign In With Google</button>
           <button onClick={handleGithubSignIn}>Sign In With GitHub</button>
          </>
}
    

      {/* Display user info if logged in */}
      {user && (
        <div>
          <h3>{user.displayName}</h3> 
          <h4>Email: {user.email}</h4> 
        <img src = {user.
photoURL} alt="" />


        </div>
      )}
    </div>
  );
};

export default Login;
