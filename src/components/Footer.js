import React from "react";
import "../Style/footer.css"; // Ensure you have appropriate styles for the footer
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h4>ALGO-FISSION</h4>
          <p>Building a better web, one pixel at a time.</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FacebookIcon color="primary" />
            <a href="https://facebook.com" target="_blank" rel="noreferrer"></a>
            <TwitterIcon color="primary" />
            <a href="https://twitter.com" target="_blank" rel="noreferrer"></a>
            <InstagramIcon color="primary" />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            ></a>
            <LinkedInIcon color="primary" />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
