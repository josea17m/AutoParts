/* eslint-disable react/jsx-no-target-blank */
import { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = null;
  }

  redireccion = function redirect(link) {
    window.location.replace(link);
  };

  render() {
    return (
      <header className="container-header">
        <div className="container-logo">
          <a href="/">
            <img src="/logo amarillo gris.png" alt="logo" />
          </a>
        </div>

        <div className="container-items-header">
          <div className="item-top">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              rel="noopener"
              target="_blank"
            >
              <img src="/facebook circle gray.png" alt="facebook" />
            </a>
          </div>

          <div className="item-top">
            <a href="https://www.instagram.com/josea17m/" aria-label="Instagram" rel="noopener" target="_blank">
              <img src="/instagram circle gray.png" alt="instagram" />
            </a>
          </div>

          <div className="item-top">
            <a
              href="https://wa.link/6bw2q0"
              aria-label="Whatsapp"
              rel="noopener"
              target="_blank"
            >
              <img src="/whatsapp circle gray.png" alt="whatsapp" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
