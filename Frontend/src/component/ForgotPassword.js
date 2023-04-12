import './ForgotPassword.css';

function ForgotPassword() {

    return (
        <div className="container-div"  id="container">
           <div className='form-container'>
                <form>
                    <h1>Forgot Password</h1>
                    <input className="input" type="password" placeholder="New password" />
                    <input className="input" type="password" placeholder="Confirm password" />
                    <button type="submit">Submit</button>
                </form>
                </div>
        </div>
    )

}

export default ForgotPassword;