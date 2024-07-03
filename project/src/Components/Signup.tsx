import "./Signup.css";
function Signup()
{
    return <div>
        <center><form className="elementsb">
                <h1>Signup</h1>
                <div className="elements">
                <label className="labelp">Email:</label>
        <input className="inputp" type="email" name="email" id="email" placeholder="Email" required></input><br />
        <br />
        <label className="labelp">Username:</label>
        <input className="inputp" type="text" name="name" id="name" placeholder="Username" required></input><br />
        <br />
        <label className="labelp">Password:</label>
        <input className="inputp" type="password" name="password" id="password" placeholder="Password" required></input><br />
        <br />
        <label className="labelp">Confirm Password:</label>
        <input className="inputp" type="password" name="confirmpassword" id="password" placeholder="Password" required></input><br />
        <br />
        <center><button className="buttons">Create Account</button></center>
        </div>
        </form>
        </center>
    </div>
}
export default Signup;