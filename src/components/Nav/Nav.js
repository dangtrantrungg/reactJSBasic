import React from "react";
import "../../assets/scss/nav.scss";
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink
                        className={(navData) => (navData.isActive ? 'active' : '')}
                        to="/" exact
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={(navData) => (navData.isActive ? 'active' : '')}
                        to="/todo"
                        end
                    >
                        Todo
                    </NavLink>
                    <NavLink
                        className={(navData) => (navData.isActive ? 'active' : '')}
                        to="/about"
                        end
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={(navData) => (navData.isActive ? 'active' : '')}
                        to="/users"
                        end
                    >
                        Users
                    </NavLink>
                </div>
            </>
        )
    }
}
export default Nav;