/* eslint-disable react/jsx-no-target-blank */
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-item">Métodos de pago</div>
        <div className="footer-item">Ubicaciones</div>
        <div className="footer-item">Redes sociales</div>

        <div className="footer-item-inferior pay-methods">
          <div className="pay-method-item visa"></div>
          <div className="pay-method-item american-express"></div>
          <div className="pay-method-item master-card"></div>
          <div className="pay-method-item paypal"></div>
        </div>

        <div className="footer-item-inferior">
          <div className="container-map">
            <div className="container-map-item">
              <div className="map-item"></div>

              <a
                className="map-link"
                href="https://www.google.com/maps/place/Salón+del+Reino+de+los+Testigos+de+Jehová/@6.1774739,-75.5998487,17z/data=!3m1!4b1!4m5!3m4!1s0x8e4682380721837f:0xdc041753d08bacb8!8m2!3d6.1775026!4d-75.5976376?hl=es"
                aria-label="Instagram"
                rel="noopener"
                target="_blank"
              >
                Sabaneta, Antioquia, Colombia
              </a>
            </div>
            <div className="container-map-item">
              <div className="map-item"></div>

              <a
                className="map-link"
                href="https://www.google.com/maps/place/Salón+del+Reino+de+los+Testigos+de+Jehová/@6.1774739,-75.5998487,17z/data=!3m1!4b1!4m5!3m4!1s0x8e4682380721837f:0xdc041753d08bacb8!8m2!3d6.1775026!4d-75.5976376?hl=es"
                aria-label="Instagram"
                rel="noopener"
                target="_blank"
              >
                Maracaibo, Zulia, Venezuela
              </a>
            </div>
          </div>
        </div>

        <div className="footer-item-inferior">
          <ul className="footer-social">
            <a
              href="https://www.instagram.com/josea17m/"
              aria-label="Instagram"
              rel="noopener"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              rel="noopener"
              target="_blank"
            >
              Facebook
            </a>

            <a
              href="https://wa.link/6bw2q0"
              aria-label="Whatsapp"
              rel="noopener"
              target="_blank"
            >
              WhatsApp
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
