import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      },
    );
  }

  openNav() {
    document.getElementById('overlayNav').style.width = '100%';
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  closeNav() {
    document.getElementById('overlayNav').style.width = '0%';
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark" id="navbar">
          <div>
            <button
              class="navbar-toggler bg-transparent"
              type="button"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onclick="openNav()"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" aria-current="page" data-scroll="#home">
                  Home
                </a>

                <a class="nav-link" data-scroll="#about">
                  About
                </a>
                <a class="nav-link" data-scroll="#tour">
                  Tour
                </a>
                <a class="navbar-brand" id="DWLogo" data-scroll="#home"></a>
                <a class="nav-link" data-scroll="#media">
                  Media
                </a>
                <a class="nav-link" data-scroll="#merch">
                  Merch
                </a>
                <a class="nav-link" data-scroll="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div id="overlayNav" class="overlay">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
            &times;
          </a>

          <div class="overlay-content">
            <a
              class="nav-link"
              aria-current="page"
              onclick="closeNav()"
              data-scroll="#home"
            >
              Home
            </a>
            <a class="nav-link" onclick="closeNav()" data-scroll="#about">
              About
            </a>
            <a class="nav-link" onclick="closeNav()" data-scroll="#tour">
              Tour
            </a>
            <a class="nav-link" onclick="closeNav()" data-scroll="#media">
              Media
            </a>
            <a class="nav-link" onclick="closeNav()" data-scroll="#merch">
              Merch
            </a>
            <a class="nav-link" onclick="closeNav()" data-scroll="#contact">
              Contact
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default Navbar;
