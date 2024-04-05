import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init/firebase.init";
import { useState } from "react";
import { FaRegEye ,FaRegEyeSlash } from "react-icons/fa6";

const HeroRegister = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleHeroRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password);

    setErrorMsg('')
    setSuccessMsg('')

    if (password.length < 6) {
      setErrorMsg('Password should be at least 6 characters');
      return
    }
    // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/(password validation regex js)
    else if(!/[!@#$%^&*]/.test(password)) {
      setErrorMsg('Password should be at least 1 spacial character')
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMsg("User Successfully Added")
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg(error.message);
      });
  };

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
          <form onSubmit={handleHeroRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label relative">
                <span className="label-text">Password</span>
              <span onClick={() => setShowPassword(!showPassword)} className="absolute -bottom-9 right-3">
                {
                  showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                }
              </span>

              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            {
              errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>
            }
            {
              successMsg && <p className="text-green-600 text-center">{successMsg}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
