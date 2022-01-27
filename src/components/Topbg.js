import React from 'react';
import './Topbg.css';
import { Button } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

function Topbg() {
  return (
      <div className="topbg">
          <div className="top__left">
              <div className="row">

                  <h1>Say yes to<br/>Less Work, <span className='highlight' >More Sales</span></h1>
                  <p>SIM based Call Management CRM for small, medium, and large enterprises</p>
                  <div className="buttons">
                    <div className="button_white"> 
                        <Button variant="text"  startIcon={<AppleIcon />}>App Store</Button>
                    </div>
                    <div className="button_white"> 
                        <Button variant="text" startIcon={<ShopIcon />}>Play Store</Button>
                    </div>
                  </div>
              </div>
          </div>
          <div className="top__right">
            <img src="https://runo.in/images/top-mobile-1-min.png" alt="logo" />
          </div>
      </div>
  )
}

export default Topbg;
