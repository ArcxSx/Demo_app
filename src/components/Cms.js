import React from "react";
import './Cms.css';
import { Button } from '@mui/material';

function Cms() {
  return (
    <div className="cms">
      <div className="row">
        <h1>
        A portable and productive sim based <br/> calling-experience CRM right from your <br/> mobile
        </h1>
        <p>
        RUNO helps you to manage business-calls, with access to real-time reports and analytics — on the 
          <br /> move
        </p>
      </div>
      <div className="cms__container">
        <div className="cms__left">
          <img src="https://runo.in/images/Zero-Capex.svg" alt="" />
        </div>
        <div className="cms__right">
          <div className="cms__body">
            <h3> No desktops. No servers. No dialers.</h3>
            <h4>Get started with a zero capital investment</h4>
            <ul className="cms__listing">
              <li className="cms__list">
                GSM based cost effective calling medium
              </li>
              <li className="cms__list">
                Call recording and realtime performance analytics
              </li>
              <li className="cms__list">Higher contect ratios</li>
              <li className="cms__list">Live team status</li>
            </ul>
            <div className="buttons">
              <a className="know_more_button" href="/">Know More</a>
              <div className="button_dark">
                <Button variant="text" >
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cms;
