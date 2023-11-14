import "./login.css";
<main className="main">
<header className="navbar">
  <div className="icon">
    <h2 className="logo">PRAroz</h2>
  </div>
  <nav className="menu">
    <ul>
      <li>
        <a href="#">HOME</a>
      </li>
      <li>
        <a href="#">ABOUT</a>
      </li>
      <li>
        <a href="#">SERVICES</a>
      </li>
      <li>
        <a href="#">DESIGN</a>
      </li>
      <li>
        <a href="#">CONTACT</a>
      </li>
    </ul>
  </nav>
  <div className="search">
    <input
      className="srch"
      type="search"
      name=""
      placeholder="Type to search"
    />
    <a href="#">
      <button className="btn">SEARCH</button>
    </a>
  </div>
</header>
<section className="content">
  <h1>
    WEB DESIGN &<br />
    <span>DEVELOPMENT</span><br />
    COURSE
  </h1>
  <p className="par">
    we deal with different types of programming languages<br />
    we would love to partner with you in your journey <br />
    for you to become a certified and skillful programmer
  </p>

  <button className="cn">
    <a href="#">JOIN US</a>
  </button>

  <form className="form">
    <h2>LOGIN HERE</h2>
    <input type="email" name="email" placeholder="Enter your Email here" />
    <input
      type="password"
      name="password"
      placeholder="Enter your password"
    />
    <button className="btn">
      <a href="#">LOGIN</a>
    </button>

    <p className="link">
      do not have an account?
      <br />
      <a href="#">Sign up</a> here
    </p>
    <p className="liw">Log In with</p>
  </form>
</section>
</main>
export default Login