import "./Login.css";
function Login()
{
    return <div>
        <center><form className="formc">
            <h1>Login</h1>
            <div className="lcenter">
            <label>Username:</label>
            <input type="text" name="name" id="name" placeholder="Username" required></input><br />
            <br />
            <label>Password:</label>
            <input type="password" name="password" id="password" placeholder="Password" required></input><br />
            <br />
            <button className="bstyle">Submit</button><br />
            Create an Account? <a href="/s">Create Account</a><br />
            Forgot Password? <a href="">Forgot Password</a>
            </div>
        </form></center>
    </div>
}
export default Login;