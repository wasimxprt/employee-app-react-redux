import React from 'react';

function Footer(props) {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">Is this website helpful to you? Please give us a like, or share your feedback. Connect with us on Facebook and Twitter for the latest updates.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Terms of Use</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 XYZ. All Rights Reserved.
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;