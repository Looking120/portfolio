import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav container">
                
                <a href="index.html" className="nav-logo">Joshua</a>

                <div className="nav-menu">
                    <ul className="nav-list grid">
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-home nav-icons"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-book-reader nav-icons"></i>
                                About
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-file-info-alt nav-icons"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-receipt nav-icons"></i>
                                Service
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-images nav-icons"></i>
                            Portfolio
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-envelope-star nav-icons"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times-circle nav-close"></i>
                </div>
                <div className="nav-toggle">
                    <i class="uil uil-apps"></i>
                </div>
            </nav>

        </div>
    );
}

export default Header;