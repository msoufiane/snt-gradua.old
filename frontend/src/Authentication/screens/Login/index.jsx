/**
 * Created by soufiaane on 7/3/17.
 */

import React         from 'react';
import { Link }      from 'react-router-dom';
import { LoginForm } from '../../';


export default function Login() {
  document.body.className = "hold-transition login-page";

  return (
    <div className="login-box">
      <div className="login-logo">
        <Link to="/"><b>SentAd</b>Media</Link>
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <LoginForm />
        <a>I forgot my password</a>
      </div>
    </div>
  );
}
