'use client';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-bg-image" />
      <div className="container position-relative">
        <div className="row align-items-center text-white">
          {/* Hours Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3 text-uppercase">HOURS</h5>
            <p className="mb-0">
              12 NOON TILL LATE,
              <br />
              7 DAYS A WEEK
            </p>
          </div>

          {/* Center Logo Column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
            <div className="footer-logo mb-4">
              <h2 className="fw-bold mb-2">THE SHAMROCK</h2>
              <p className="mb-0 text-uppercase letter-spacing">IRISH PUB & EATERY</p>
            </div>

            {/* Social Media Icons */}
            <div className="social-links">
              <a href="https://facebook.com" className="social-icon me-4" aria-label="Facebook">
                <i className="fab fa-facebook fa-2x" />
              </a>
              <a href="https://twitter.com" className="social-icon me-4" aria-label="Twitter">
                <i className="fab fa-twitter fa-2x" />
              </a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x" />
              </a>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 text-uppercase">CONTACT INFO</h5>
            <p className="mb-1">
              <strong>P: 951.696.5252</strong>
            </p>
            <p className="mb-0">
              39252 WINCHESTER RD. #145,
              <br />
              MURRIETA, CA 92563
            </p>
          </div>
        </div>
        
        {/* Bottom Row - Payment & Messaging */}
        <div className="row mt-5 pt-4">
          <div className="col-md-6 mb-3 mb-md-0 text-center">
            <div className="payment-section">
              <h6 className="fw-bold mb-3 text-white">PAY</h6>
              <div className="payment-logo">
                <img src="images/venmo-logo.png" alt="Venmo" className="payment-icon" />
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="messaging-section">
              <h6 className="fw-bold mb-3 text-white">MESSAGE</h6>
              <div className="messaging-logo">
                <img
                  src="images/messenger-logo.png"
                  alt="Facebook Messenger"
                  className="payment-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top position-fixed">
        <a href="#home" className="btn btn-light rounded-circle" aria-label="Back to top">
          <i className="fas fa-chevron-up" />
        </a>
      </div>
    </footer>
  );
}
