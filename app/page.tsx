export default function Page() {
  return (
    <div>
      <header id="navbar" className="navbar navbar-nav navbar-dark">
        <nav className="nav-bar navbar-expand-lg container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                >
                  About
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#overview">
                    JCC Overview
                  </a>
                  <a className="dropdown-item" href="#mission">
                    Mission
                  </a>
                  <a className="dropdown-item" href="#director">
                    Director
                  </a>
                  <a className="dropdown-item" href="#story">
                    Our Story
                  </a>
                  <a className="dropdown-item" href="#board">
                    Board Members
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#our-program">
                  Program
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="campaign.html">
                  Campaign
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="henn-campaign.html">
                  Henn Family Campaign
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                >
                  Support
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#volunteer">
                    Volunteer
                  </a>
                  <a className="dropdown-item" href="#host-a-drive">
                    Host a Drive
                  </a>
                  <a className="dropdown-item" href="#contribute">
                    Contribute
                  </a>
                  <a className="dropdown-item" href="#sponsor">
                    Sponsor
                  </a>
                  <a className="dropdown-item" href="#employment">
                    Jobs
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Media
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/host-a-sports-equiment-drive.html"
                >
                  Host A Sports Equiment Drive
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
