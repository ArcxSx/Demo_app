import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Button } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer__container">
          <div className="sub_container">
            <div className="footer__logo">
              <img src="https://runo.in/images/Runo-logo.png" alt="" />
              </div>
              <ul className="footer__list">
                <li>
                  <a href="/">care@runo.in</a>
                </li>
                <li>
                  <a href="/">+91 9784006190</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            
          </div>

          <div className="sub_container">
            <div className="footer__box">
              <h4>Company</h4>
              <ul className="footer__list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Call Management CRM</a>
                </li>
                <li>
                  <a href="/">POS CRM</a>
                </li>
                <li>
                  <a href="/">Field CRM</a>
                </li>
                <li>
                  <a href="/">Partners</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sub_container">
            <div className="footer__box">
              <h4>Policies</h4>
              <ul className="footer__list">
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/">Usage Policy</a>
                </li>
                <li>
                  <a href="/">Data Security</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sub_container">
            <ul className="socials">
              <li>
                <a href="/">
                  <FacebookIcon fontSize="large"/>
                </a>
              </li>
              <li>
                <a href="/">
                  <InstagramIcon fontSize="large"/>
                </a>
              </li>
              <li>
                <a href="/">
                  <LinkedInIcon fontSize="large"/>
                </a>
              </li>
              <li>
                <a href="/">
                  <YouTubeIcon fontSize="large"/>
                </a>
              </li>
            </ul>
            <p>Lets try out!</p>
            <div className="footer_buttons">
              <div className="button_white">
                <Button variant="text" startIcon={<AppleIcon />}>
                  App Store
                </Button>
              </div>
              <div className="button_white">
                <Button variant="text" startIcon={<ShopIcon />}>
                  Play Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
