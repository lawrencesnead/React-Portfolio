import React from 'react';



class Header extends React.Component {

  render() {
    return (
      <div className="Header">
          
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="col offset-md-1 rounded" id="myTitle">
                <a href="index.html"><h1>Lawrence Snead</h1></a>
            </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">About |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Portfolio |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/lawrencesnead">GitHub Repository |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.linkedin.com/in/lawrence-snead">LinkedIn |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>

        </nav>
        

        
      </div>
    );
  }
}

export default Header;
