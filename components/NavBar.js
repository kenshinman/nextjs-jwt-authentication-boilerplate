import { Component } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import Link from "next/link";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
            </ul>
            {!this.props.isAuthenticated && (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/signin">
                    <a className="nav-link">Sign In</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/signup">
                    <a className="nav-link">Sign Up</a>
                  </Link>
                </li>
              </ul>
            )}
            {this.props.isAuthenticated && (
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Profile
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">
                      My Account
                    </a>
                    <a className="dropdown-item" href="#">
                      Billing
                    </a>
                    <div className="dropdown-divider" />

                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={e => this.props.logout()}>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
