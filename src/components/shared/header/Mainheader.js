const Mainheader = () => {
  return (
    <div>
       <header className="header">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              <div className="navbar-header left">
                  <div className="brand-text d-none d-lg-inline-block">
                    <a href="App.js">
                      <img src="" alt="BVP" className="logo-menu logo2"  />
                      </a>
                    <form className="navbar-form navbar-left" action="">
                      <i className="fa fa-search"></i>
                    <input type="text" className="form-control navseacrh myBtnb" placeholder="Search For anything" name="search" />
                  </form>
                  </div>
                <a id="toggle-btn" href="#" className="menu-btn active">
                <span></span><span></span><span></span></a> 
              </div>
            </div>
          </div>
        </nav>
      </header>
    <MainNBRight />
  </div>
  );
  }

  const MainNBRight = () => {
    return (
         <header className="header-right">
          
                <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                  <li className="nav-item d-flex align-items-center"><a href="#" className="nav-link"><i className="fa fa-question"></i></a></li>
                  <li className="nav-item d-flex align-items-center"><a href="#" className="nav-link"><i className="fa fa-sort"></i></a></li>
                  <li className="nav-item d-flex align-items-center"><a href="#" className="nav-link"><i className="fa fa-bar-chart"></i></a></li>
                  <li className="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-bell"></i></a>
                  </li>
                  <li className="nav-item"><a href="login.html" className="nav-link logout"> <i className="fa fa-user"></i></a></li>
                </ul>
             
        </header>
        );
    }

    export default Mainheader;