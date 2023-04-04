function Header () {
    return (
        <nav className="navbar navbar-light bg-light navbar-home" >
   <span className="navbar-brand mb-0 h1 navbar-home">PIZZAMANIA</span>
 <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active nav-home" href="Home">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link  nav-home" href="AboutPizza">About Pizza</a>
  </li>
  <li className="nav-item">
    <a className="nav-link nav-home" href="PizzaTypes">Pizza Types</a>
  </li>
  
 </ul>
</nav>
    );
}


export default Header;