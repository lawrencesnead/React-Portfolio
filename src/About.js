import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="About">
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
        )
    }
}

export default About;