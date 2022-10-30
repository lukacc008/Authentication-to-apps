import { useRef, useContext } from 'react';

import AuthContext from "../../store/auth-context"
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();
 
    const enteredNewPassword = newPasswordInputRef.current.value;


    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB8Adpfdpzwd6yaV8wWFQdxPYOI4telEv4", {
      method: "POST",
      body: JSON.stringify({
        idToken,
        password,
        returnSecureToken
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }; 


  return (
    <form className={classes.form} onStubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  ); 
}

export default ProfileForm;
