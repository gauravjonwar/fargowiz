import { Link } from "react-router-dom"
function Header() {
    return ( 
        <>
        
        <section>
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/fetch">fetch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/show">show</a>
        </li>
        
        
      </ul>

    </div>
  </div>
</nav>
            </div>
            </div>
            </div>
        </section>
        </>
     );
}

export default Header;