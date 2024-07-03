import "./Home.css";
function Home()
{
    return <div>
        <center><h1>Home</h1></center>
        <button className="loginbs"><a className="loginbc" href="/l">Login</a></button>
        <button className="signupbs"><a className="signupbc" href="/s">Signup</a></button>
        <h2><a className="productss" href="/p">Products</a></h2>
    </div>
}
export default Home;