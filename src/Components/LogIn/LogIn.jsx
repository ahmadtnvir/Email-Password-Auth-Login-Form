import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init/firebase.init";
import { useRef, useState } from "react";
import { FaRegEye ,FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LogIn = () => {

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const emailRef = useRef(null);

  const handleLongIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    setErrorMsg('');
    setSuccessMsg('');

    if (password.length < 6) {
      setErrorMsg('Password should be at least 6 characters');
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      setErrorMsg('Password should be at least 1 spacial character');
      return;
    }

    signInWithEmailAndPassword(auth,email,password)
      .then(result => {
        console.log(result.user);
        if(result.user.emailVerified){
            setSuccessMsg('Successfully Added');
        }
        else{
          alert('Please verify your account.')
        }
      })
      .catch(error => {
        console.error(error);
        setErrorMsg(error.message);
      })
  }

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log('Please provide an email', emailRef.current.value);
      return;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Please write a valid email');
      return;
    }
    sendPasswordResetEmail(auth,email)
      .then(() => {
        alert('Sent an Email');
      })
      .catch(error => {
      console.log(error.message)}
    )
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLongIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <div>
              {
                errorMsg && <small className="text-red-600">{errorMsg}</small>
              }
              <span onClick={() => setShowPassword(!showPassword)} className="absolute top-12 right-3">
                {
                  showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                }
              </span>
            </div>
              <label className="label">
                <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              {
                successMsg && <small className="text-green-600">{successMsg}</small>
              }
            </div>
            <div className="text-center">
              <p>New to this website? Please <Link to={'/heroRegister'} className="text-blue-600">register.</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
