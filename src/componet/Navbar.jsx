import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className="nav-item">
                        <Link to={ "/" }>
                            FOOD
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={ "/blog" }>
                            BLOG
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ "/addblog" }>
                            ADDBLOG
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ "/about us" }>
                            ABOUT US
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ "/list" }>
                            list
                        </Link>
                    </li>
                    <li className="icon">&#9776;</li>
                </ul>
            </nav>
        </div >
    )
}

export default Navbar