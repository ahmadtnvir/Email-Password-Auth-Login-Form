

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }

    return (
        <div>
            <div className="mx-auto md:w-1/2 text-center">
            <h3 className="text-3xl">Please Register Now</h3>
            <form onSubmit={handleRegister}>
                <input className="py-2 px-4 border-none outline-none rounded-xl my-2 w-3/4" type="email" name="email" id=""  placeholder="Email"/>
                <br />
                <input className="py-2 px-4 border-none outline-none rounded-xl my-2 w-3/4" type="password" name="password" id="" placeholder="Password"/>
                <br />
                <input className="btn btn-secondary py-2 px-4 w-3/4 font-bold rounded-xl" type="submit" value="Register" />
            </form>
            </div>
        </div>
    );
};

export default Register;