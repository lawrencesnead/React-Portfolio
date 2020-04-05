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
        

        <div className="wrap">
        
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12 col-lg-12 col-centered">
                <div className="main-section rounded">
                    <div className="media">
                        <div className="media-left media-top rounded">
                          <img src="assets/images/Me.jpg" className="media-object" id="auth-image" alt="me"/>
                        </div>
                        <div className="media-body">
                          <h2 className="media-heading">About Me</h2>
                          <p>My name is Lawrence Snead, and I am 29 years old. I was born in Richmond, VA. I have lived in the Richmond area most of my life, moving around near by. I now live with my cat, Jasmine, in Ashland on the family farm. </p>

                          <p>I am currently employed as a loan processor at Presidential Bank Mortgage. They are a great company to work for, but I grow tired of the repetitive tasks every day. I have always enjoyed programming, and it's frustrating it took me this long to realize I needed to make a career out of it. When I was in 8th grade, I taught myself HTML with Microsoft Front Page and a book. I have also taken a few programming classNamees throughout my life, and I have a basic understanding of Python and Java. I am seeking a career change and have enrolled in a web development bootcamp to hone my skills like a fine blade.</p>
                        
                        </div>
                    </div>

                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
